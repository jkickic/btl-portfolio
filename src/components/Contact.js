import React from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import RoomIcon from "@material-ui/icons/Room"
import PhoneIcon from "@material-ui/icons/Phone"

import Fade from "react-reveal/Fade"
import data from "../site-data/siteData"
import { Link } from "@material-ui/core"

const Contact = () => {
  let { contact } = data
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>{contact.heading}</h1>
            <h2>{contact.subHeading}</h2>
          </Fade>
          <div className="social-icons">
            <Link className="social-link" href={`mailto:${contact.email}`}>
              <MailOutlineIcon className="social-icon" />
              <span>{contact.email}</span>
            </Link>
            <Link
              className="social-link"
              href={contact.fbLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="social-icon" />
              <span>{contact.facebookContactText}</span>
            </Link>

            <Link
              className="social-link"
              href={contact.gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RoomIcon className="social-icon" />
              <span>{contact.gmapsText}</span>
            </Link>
            <Link
              className="social-link"
              href={"tel:" + contact.phoneNumber}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneIcon className="social-icon" />
              <span>{contact.phoneText}</span>
            </Link>
            <Link
              className="social-link"
              href={contact.facebookSessionLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="social-icon" />
              <span>{contact.fbBookSessionText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
