import React from 'react'
import { Link } from '@reach/router'
import Main from '../styled/Main'
import { Block, Inline, InlineBlock, Row } from 'jsxstyle'
export default ({ siteConfig, title }) => (
  <Main>
    <Block component="h1" borderBottom="1px solid #ddd">
      Page Not Found
    </Block>
    <p>
      Go{' '}
      <Inline
        textDecoration="underline !important"
        component={Link}
        props={{ to: '/' }}
      >
        home page
      </Inline>
      .
    </p>
    {siteConfig.logo && (
      <Row
        alignItems="center"
        justifyContent="center"
        component={Link}
        props={{ to: '/' }}
        textAlign="center"
        marginTop={200}
        textDecoration="none"
      >
        <InlineBlock
          component="img"
          maxWidth={50}
          borderRadius={3}
          border="none"
          marginRight={5}
          props={{ src: siteConfig.logo }}
        />
        {siteConfig.title}
      </Row>
    )}
  </Main>
)
