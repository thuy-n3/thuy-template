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

            {/* semantic */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
            <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

            
            <link rel="stylesheet" href="./lib/styles/styles.css" />
        </body>
    </html>

export { HTML }
