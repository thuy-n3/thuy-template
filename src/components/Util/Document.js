const React = require('react') ,
    { Component } = React
import { render } from 'react-dom'

const HTML = ({children}) =>
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta charSet="UTF-8" />
            <title>
                Portfolio
            </title>
        </head>
        <body>
            <div id="reactRoot">{children}</div>
            <script src="lib/js/index.js" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
            <link rel="stylesheet" type="css" href="./styles/styles.css" />

        </body>
    </html>

export { HTML }
