import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ImageModal({ url, onClose }) {
  if (!url) return null;
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, 
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </button>
            <button type="button" className="nav-button">
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
            </button>
            <button type="button" className="nav-button">
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
          <div className="modal-body">
            <img src={url} alt="Full Size" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;


