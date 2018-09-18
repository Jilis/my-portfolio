import React from 'react'
import Link from 'gatsby-link'

const Settingspage = () => (
  <div>
      <fieldset margin='20px'
      padding='10px' >
          <h3 margin-left='10px'
          padding-left='0px' >This is a fieldset </h3>
      </fieldset>
    <h1>Hi from the settings page</h1>
    <p>Welcome to the settings page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Settingspage