import React from 'react'

const Modal = ({show, onClose}) => {
    if(!show) {
        return null
    }
  return (
    <div className="modal_container" onClick={onClose}>
      <div className="modal_box" onClick={(e) => e.stopPropagation()}>
        <div className="modal_content">Complaint Sent!</div>
        <div className="modal_footer" onClick={onClose}>
          <div className="btn_close">Close</div>
        </div>
      </div>
    </div>
  );
}

export default Modal