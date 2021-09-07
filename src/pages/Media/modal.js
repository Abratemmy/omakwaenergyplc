import React from 'react';
import data from '../../pages/Media/mediadata'

function Modal({closeModal}) {
   
    return (
        <div className="modalBackground">
            <div className="modal-container">
                <button onClick={()=>closeModal(false)}>X</button>
                <div className="title">
                    {data.map}
                </div>
            </div>
            
        </div>
    )
}

export default Modal
