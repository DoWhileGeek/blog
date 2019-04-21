import React from "react"
import { graphql } from "gatsby"

import Paper from '@material-ui/core/Paper'
// import CardActions from '@material-ui/core/CardActions'
// import Button from '@material-ui/core/Button'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { title, date } = frontmatter

  return (
    <div style={s.container} className="blog-post-container">
      <Paper style={s.paper} elevation={4}>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Paper>
    </div>
  )
}

const s = {
  container: {
    padding: '20px',
    margin: '0 auto',
    width: '80%'
  },

  paper: {
    padding: '20px',
  }
}

export const pageQuery = graphql`
  query($title: String!, $date: Date!) {
    markdownRemark(frontmatter: { date: { eq: $date }, title: { eq: $title } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
