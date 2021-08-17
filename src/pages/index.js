import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
     <h1>Hello.</h1>
      <h2>I am Sabrina, a full-stack developer living in lovely Cleveland.</h2>
      
      <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>  
    </Layout>
  )

}

export default IndexPage

//Goal: Create a shared page header 

//1. Setup a header component
//  - Include site title and links to all four pages
//2. Render header at top of all site pages
//3. Test your work