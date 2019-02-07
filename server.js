const express = require('express');
const app = express();
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { HTML } from './src/components/Util/Document'
import { App } from './src/index'

const port = +process.argv[2]

app .use( (req, res, next) => {
        res .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        next()
    })
    .get( '/' , (req , res) => {
        res.send( renderToStaticMarkup(<HTML><App /></HTML>) )
    })
    .use( express.static('.') )
    .listen( port, () => console.log(`remote app listening on port ${port}!`) )
