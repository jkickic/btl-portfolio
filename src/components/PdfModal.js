import React from "react"
import { Modal } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

const PdfModal = ({ pdfSrc, imgSrc }) => {
  const srcWithParams = `${pdfSrc}#toolbar=0&navpanes=0`
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className="pdf-modal-button-wrapper">
      <img className="open-modal-button" src={imgSrc} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="embed-wrapper">
          <CloseIcon className="escape-button" onClick={handleClose} />
          <embed
            className="pdf-modal"
            src={srcWithParams}
            type="application/pdf"
            width="60%"
          />
        </div>
      </Modal>
    </div>
  )
}

PdfModal.propTypes = {}

export default PdfModal
