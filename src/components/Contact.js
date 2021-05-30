import React from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import RoomIcon from "@material-ui/icons/Room"
import PhoneIcon from "@material-ui/icons/Phone"

import Fade from "react-reveal/Fade"
import { Link } from "@material-ui/core"

const Contact = ({ siteData }) => {
  let { contact } = siteData
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="contact-container">
          <Fade bottom cascade>
            <h1>{contact.heading}</h1>
            <h2>{contact.subHeading}</h2>
          </Fade>
          <div className="social-icons">
            <Link className="social-link" href={`mailto:${contact.email}`}>
              <MailOutlineIcon className="contact-icon" />
              <span>{contact.emailText}</span>
            </Link>
            <Link
              className="social-link"
              href={contact.fbLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="contact-icon" />
              <span>{contact.facebookContactText}</span>
            </Link>

            <Link
              className="social-link"
              href={contact.gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RoomIcon className="contact-icon" />
              <span>{contact.gmapsText}</span>
            </Link>
            <Link
              className="social-link"
              href={"tel:" + contact.phoneNumber}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneIcon className="contact-icon" />
              <span>{contact.phoneText}</span>
            </Link>
            <Link
              className="social-link"
              href={contact.facebookSessionLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="contact-icon" />
              <span>{contact.fbBookSessionText}</span>
            </Link>
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
