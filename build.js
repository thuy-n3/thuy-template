const fs = require('fs');
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { HTML } from './src/components/Util/Document'
import { App } from './src/index'

fs.writeFile(
  "./index.html",
  renderToStaticMarkup(<HTML><App /></HTML>),
  err =>
    console.log(err || "The file was saved!"))