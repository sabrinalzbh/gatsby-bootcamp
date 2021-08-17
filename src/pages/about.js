import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return(
        <Layout>
<h1> About Me </h1>
            <p>Hi there! My name is Sabrina. I am a full-stack developer living in Clevelan.
                I am currently in school pursing a Certifcate in CompTIA Security+. <br></br>

                I began my developer journey about 3 years ago. I had always had a relationship with technology since I was 
                about 8 years old. I use build computers with my Uncle Ronnie and I could always remember the joy and excitment 
                I felt everytime we finsihed a computer and moved to the next. It was also very thrilling because I was actually getting 
                paid per computer! How awesome is that?! <br></br>

                Years later (2015/16) I decided I wanted to write a blog. I began searching on how to create my own website. I used bluehost,
                which for a beginner was a bit confusing, nonetheless, I was successful. I blogged for just a little while and than gave it up. Why? Maybe discouragement.
                A couple of years had gone by and again, decided to try blogging again. So, i created a site with wix. <br></br>

                One day I had a techy question and asked it on facebook. A freind responded, but it wasn't to give me my answer. It was to ask me to help! I always love to 
                help so I went ahead and helped. Eventually I found myself reconstructing her business page and getting paid for it. She gave me some encouraging words and told me 
                I should pursue this career. Oh the joy! And so I did. And now, here I am.<br></br>

                My greatest hope is not to just build websites and apps, but to bring a hope to people by helping them
                bring their vision to life because believe it or not, a website/app can favor you or not.. 
            </p>

            <p>To get in touch with me just visit me here! <Link to="/contact">Contact</Link></p>
        </Layout>
    )
}

export  default AboutPage 