import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import RoomIcon from "@mui/icons-material/Room"
import PhoneIcon from "@mui/icons-material/Phone"

import Fade from "react-reveal/Fade"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Contact = ({ siteData }) => {
  let { contact } = siteData
  const copyrightYear = new Date().getFullYear()
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

            {contact.fbBookSessionText ? (
              <OutboundLink
                className="social-link"
                href={siteData.bookSessionLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="contact-icon" />
                <span>{contact.fbBookSessionText}</span>
              </OutboundLink>
            ) : (
              ""
            )}
          </div>
          <div className="copyright">
            <p>© {copyrightYear} by MATEUSZ ZAJĄC Software</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
