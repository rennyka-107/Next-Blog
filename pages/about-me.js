import React from 'react'

function AboutMe({blogs}) {
    return (
        <div>
            about me
        </div>
    )
}

export default AboutMe

export async function getStaticProps(context) {
    return {
      props: {
        blogs: [1,2,3]
      }, // will be passed to the page component as props
    }
  }

