import { FaTimes } from "react-icons/fa"
import "../css/SuccessMsgStyle.css"
import React from 'react'

const SuccessMsg = ({successText, closeSuccess}) => {
  return (
    <div className="success-full">
    <div className="success-msg">
      <strong>{successText}</strong>
      <span>Thank you </span>
    </div>
    <span>
      <FaTimes size={20} className="success-close" onClick={closeSuccess} />
    </span>
  </div>
  )
}

export default SuccessMsg
