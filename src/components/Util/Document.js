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
        </body>
    </html>

export { HTML }
