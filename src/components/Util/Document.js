const React = require('react') ,
    { Component } = React
import { render } from 'react-dom'

const HTML = ({children}) =>
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="stylesheet" href="./lib/styles/styles.css" />

            {/* semantic */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
            <title>
                Portfolio
            </title>
        </head>
        <body>
            <div id="reactRoot">{children}</div>
            <script src="lib/js/index.js" />

        </body>
    </html>

export { HTML }
