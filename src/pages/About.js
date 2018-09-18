import React from 'react'
import Link from 'gatsby-link'

const Aboutpage = () => (
  <div style={{
      background:'black',
     color:'white'
  }} >
    <h1>Hi from the about page</h1>
    <p>Welcome to the aboutpage</p>
    <Link to="/" style= {{
        color:'white'
    }} >Go back to the homepage</Link>
  </div>
)

export default Aboutpage
