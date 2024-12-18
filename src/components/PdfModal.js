import React from "react"
import { Modal } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

const PdfModal = ({ resumeSrc, imgSrc }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className="pdf-modal-button-wrapper">
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
        <div className="embed-wrapper">
          <CloseIcon className="escape-button" onClick={handleClose} />
          <div className="resume-wrapper">
            <img className="resume-img" src={resumeSrc} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

PdfModal.propTypes = {}

export default PdfModal
