const React = require('react') ,
    { Component } = React
import { render } from 'react-dom'
import { Header } from './components/header.js'
import {ProjectGallery} from './components/projectgallery.js'
import { AboutMe } from './components/aboutme.js'
import { ContactMe } from './components/contactme.js'
import { Footer } from './components/footer.js'
import { Resume } from './components/resume.js'


// for when you need to check whether you are in the browser or on the server
// (include this line in anyfile that needs to check, it's not global)
const isClient = typeof window==='undefined' ? false : true

// this is the entry point to the app, only the highest level components go here

class App extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return  <div>
                    {/* <HighLevelComponent/> */}
                    
                   <Header />
                 
                </div>
    }
}

isClient && render(<App /> , document.getElementById('reactRoot'))

export { App }


//Header 
//ProjectGallery 
//AboutMe
//ContactMe
//Resume
//Footer