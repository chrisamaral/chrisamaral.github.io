import React from 'react'

const HTML = ({headComponents, body, postBodyComponents}) => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='apple-touch-icon' sizes='120x120' href='/ico/apple-icon-120x120.png' />
      <link rel='icon' type='image/png' sizes='96x96' href='/ico/favicon-96x96.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/ico/favicon-32x32.png' />
      <link rel='manifest' href='/manifest.json' />
      <meta name='msapplication-TileImage' content='/ico/ms-icon-144x144.png' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='theme-color' content='#000000' />
      {process.env.NODE_ENV === 'production' && (
        <link rel='stylesheet' href='/styles.css' />)}
      {headComponents}
    </head>
    <body>
      <div id='___gatsby' dangerouslySetInnerHTML={{__html: body}} />
      {postBodyComponents}
    </body>
  </html>
)

export default HTML
