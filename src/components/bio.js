/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
            email
          }
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <div>
          <Image
            fixed={avatar}
            alt={author?.name || ``}
            className="bio-avatar"
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/${social?.twitter || ``}`}
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.linkedin.com/in/${social?.linkedin || ``}`}
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/${social?.github || ``}`}
            >
              Github
            </a>
          </p>
          <p>
            <a target="_blank" rel="noreferrer" href={`mailto:${author.email}`}>
              Email
            </a>
          </p>
        </div>
      )}
      {author?.name && (
        <div>
          <p>
            Hi, my name is <strong>{author.name}</strong>.{" "}
            {author?.summary || null}
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio
