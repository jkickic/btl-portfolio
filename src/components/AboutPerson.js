import React from "react"
import { Modal } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { magic } from "./utils"

const AboutPerson = ({ paragraphs, imgSrc }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className="about-person-button-wrapper">
      <div className="open-modal-button">
        <img
          alt="open-resume"
          className="open-modal-button-img"
          src={imgSrc}
          onClick={handleOpen}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="about-person-embed-wrapper">
          <CloseIcon className="escape-button" onClick={handleClose} />
          <div className="about-person-text-wrapper">
              {paragraphs.map((it, idx) => {
                return <p key={idx}>{magic(it)}</p>
              })}
          </div>
        </div>
      </Modal>
    </div>
  )
}

AboutPerson.propTypes = {}

export default AboutPerson
