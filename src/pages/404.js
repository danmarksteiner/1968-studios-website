import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import '../components/base.css'
import '../components/app.scss'

class NotFound extends Component {

  constructor(props) {
    super(props)
    this.state = {
      navOpen: false
    }
  }

  render() {

    const backgroundDesktop = get(this, 'props.data.contentfulBackgroundImageDesktop.backgroundImageAsset')
    const backgroundMobile = get(this, 'props.data.contentfulBackgroundImageMobile.backgroundImageAssetMobile')
    const studioLocations = get(this.props, 'data.allContentfulStudioLocation')
    const websiteLogo = get(this.props, 'data.contentfulWebsiteLogo.websiteLogoImage')

    return (
        <div className="app">
        <Helmet>
          <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          />
          <meta
          name="description"
          content="1968 Studios - World Of Stories 404"
          />
          <meta name="theme-color" content="#2d283c" />
          <title>1968 Studios - World Of Stories - 404</title>
        </Helmet>
        <div className="container">
          <Img
              className="background-mobile"
              fluid={{
                ...backgroundMobile.fluid,
                aspectRatio: 9 / 16,
              }}
              fadeIn
              alt={backgroundMobile.description}
            />
            <Img
              className="background-desktop"
              fluid={{
                ...backgroundDesktop.fluid,
                aspectRatio: 16 / 9,
              }}
              fadeIn
              alt={backgroundDesktop.description}
            />
            <div className="main-content">
              <ul className="studio-locations">
                {studioLocations.nodes.map((location) => (
                  <li key={location.locationName}>{location.locationName}</li>
                ))}
              </ul>
              <div className="contact-mail-address">
                  <h2>Page Not Found</h2>
              </div>
            </div>
            <div className="studio-logo-contact">
              <Img
                fluid={{
                  ...websiteLogo.fluid,
                  aspectRatio: 1020 / 1291,
                }}
                fadeIn
                alt={websiteLogo.description}
              />
            </div>
        </div>
      </div>
    )
  }
}

export default NotFound

export const contactQuery = graphql`
  query NotFoundQuery {
    contentfulBackgroundImageDesktop {
      backgroundImageAsset {
        id
        file {
          url
          contentType
        }
        fluid(maxWidth: 1920, maxHeight: 1080, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid
        }
        description
      }
    }
    contentfulBackgroundImageMobile {
      backgroundImageAssetMobile {
        id
        file {
          url
          contentType
        }
        fluid(maxWidth: 390, maxHeight: 844, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid
        }
        description
      }
    }
    contentfulCommunicationPolicy {
      policyTitle
    }
    contentfulCommunicationPolicyPolicyTextBodyRichTextNode {
      json
    }
    contentfulContactEmailAddress {
      emailAddress
    }
    allContentfulStudioLocation {
      nodes {
        locationName
      }
    }
    contentfulWebsiteLogo {
      websiteLogoImage {
        id
        file {
          url
          contentType
        }
        fluid(maxWidth: 1020, maxHeight: 1291, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
        description
      }
    }
  }
`