import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Me</h1>
            <p> You can always get in touch with me! <br></br>

                Cell: 216-856-0086 or Twitter: <Link to="https://twitter.com/coding_delights">@coding_delights</Link>
            </p>
        </Layout>
    )
}

export default ContactPage