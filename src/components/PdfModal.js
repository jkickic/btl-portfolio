import React from "react"
import Modal from "@material-ui/core/Modal"

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
    <div className="pdf-modal-wrapper">
      <img className="open-modal-button" src={imgSrc} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <embed
          className="pdf-modal"
          src={srcWithParams}
          type="application/pdf"
          width="60%"
        />
      </Modal>
    </div>
  )
}

PdfModal.propTypes = {}

export default PdfModal
