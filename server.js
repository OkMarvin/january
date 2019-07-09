const express = require('express')
const path = require('path')
const Bundler = require('parcel-bundler')
const getPort = require('get-port')

const bundler = new Bundler(path.join(__dirname, 'index.html'), {
  autoinstall: false
})
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(bundler.middleware())

getPort({ port: 3000 }).then(port => {
  app.listen(port, '0.0.0.0').on('listening', () => {
    console.log('Server listening on http://0.0.0.0:' + port)
  })
})
