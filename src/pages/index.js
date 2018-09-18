import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
const IndexPage = () => (
  <div style={{
    //background:'url (https://www.google.com.ng/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png) '
 }} >
 <div id='sidebar' >
  <Link to="/About">About</Link>
  <br/>
  
    </div>
    <div id='settingsbar' >
    <Link to="/Settings" >Settings</Link> <br/>
    </div>
    <h1 style={{
    color: 'purple'
    }} margin-right='20px' margin-left='20px' >Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>The Tutorials are paying off.</p>
  
    <Link to="/page-2/">Go to page 2</Link>
    
  </div>
)

export default IndexPage
