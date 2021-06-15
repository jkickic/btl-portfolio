import React from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import RoomIcon from "@material-ui/icons/Room"
import PhoneIcon from "@material-ui/icons/Phone"

import Fade from "react-reveal/Fade"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { bookSessionLink } from "../site-data/commonData"

const Contact = ({ siteData }) => {
  let { contact } = siteData
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="contact-container">
          <Fade bottom cascade>
            <h2>{contact.heading}</h2>
            <h3>{contact.subHeading}</h3>
          </Fade>
          <div className="social-icons">
            <OutboundLink
              className="social-link"
              href={`mailto:${siteData.email}`}
            >
              <MailOutlineIcon className="contact-icon" />
              <span>{contact.emailText}</span>
            </OutboundLink>
            <OutboundLink
              className="social-link"
              href={siteData.fbLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="contact-icon" />
              <span>{contact.facebookContactText}</span>
            </OutboundLink>

            <OutboundLink
              className="social-link"
              href={siteData.gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RoomIcon className="contact-icon" />
              <span>{contact.gmapsText}</span>
            </OutboundLink>
            <OutboundLink
              className="social-link"
              href={"tel:" + siteData.phoneNumber}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneIcon className="contact-icon" />
              <span>{contact.phoneText}</span>
            </OutboundLink>
            <OutboundLink
              className="social-link"
              href={siteData.bookSessionLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="contact-icon" />
              <span>{contact.fbBookSessionText}</span>
            </OutboundLink>
          </div>
          <div className="copyright">
            <p>© by MATEUSZ ZAJĄC Software 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
