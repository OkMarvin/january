/**
 * for React.js + jsxstyle
 * you can customize it as you need
 */
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CssoWebpackPlugin = require('csso-webpack-plugin').default
const ManifestPlugin = require('webpack-manifest-plugin')
const JsxstylePlugin = require('jsxstyle-webpack-plugin')
const { readdirSync, existsSync } = require('fs')

// for templates
const entries = {}

// for manifest
const seed = {}

// load all templates from src/templates directory
// make sure .test.js files are excluded
try {
  const templates = path.resolve(__dirname, 'src', 'templates')
  readdirSync(templates).forEach(template => {
    const basename = path.basename(template, path.extname(template))
    if (!basename.endsWith('.test')) {
      entries[basename] = path.join(templates, basename)
    }
  })
} catch (e) {
  // src/templates directory does not exist
}

const outputPath = path.resolve(__dirname, 'build')

const jsRule = {
  test: /\.js$/,
  include: path.resolve(__dirname, 'src'),
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-proposal-class-properties'
        ]
      }
    },
    {
      loader: JsxstylePlugin.loader,
      options: {
        whitelistedModules: [require.resolve('./src/constants')],
        cacheFile: path.resolve(__dirname, 'jsxstyle-cache.txt')
      }
    }
  ]
}
let config = {
  entry: entries,
  mode: 'production',
  output: {
    path: outputPath,
    filename: '[name].[contenthash].js',
    libraryTarget: 'commonjs'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      jsRule,
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {}
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [require('autoprefixer')(), require('cssnano')()] // we need autoprefixer here since jsxstyle doesn't do it for us
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/static/img/' // output to `/static/img`
            }
          },
          {
            loader: 'image-webpack-loader', // optimize images
            options: {
              disable: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']), // remove build first
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new ManifestPlugin({ seed }),
    new CssoWebpackPlugin(),
    new JsxstylePlugin()
  ],
  externals: [nodeExternals()], // do not include node modules
  target: 'node'
}
// bundle client/index.js too when it exists
// target defaults to `web`
if (existsSync(path.resolve(__dirname, 'src/client/index.js'))) {
  config = [
    config,
    {
      mode: 'production',
      entry: {
        client: './src/client' // make sure entry name is set to `client`
      },
      output: {
        path: outputPath,
        filename: '[name].[contenthash].js'
      },
      module: {
        rules: [jsRule]
      },
      plugins: [new ManifestPlugin({ seed }), new JsxstylePlugin()]
    }
  ]
}
module.exports = config