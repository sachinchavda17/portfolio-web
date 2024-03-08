import React, { useEffect } from "react";
import "../css/ConfirmModal.css";

const ConfirmModal = ({ message, onConfirm, onCancel, setShowConfirmModal }) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);
    return (
        <div className="confirm-modal-overlay">
            <div className="confirm-modal">
                <p>{message}</p>
                <div className="confirm-modal-buttons">
                    <button className="confirm-modal-button" onClick={() => {
                        onConfirm()
                        setShowConfirmModal(false)
                    }}>
                        Delete
                    </button>
                    <button className="cancel-modal-button" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
