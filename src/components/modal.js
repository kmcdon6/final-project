import React from 'react'

import "./modal.css"

const Modal = props => {
    if (!props.show) {
        return null
    }
   
        
   

    return (
      <div className="modal">
          <div className= "modal-content">
        <div className="modal-body">
          We are concerned about your coffee addiction. Please reference the
          following site for health tips about caffiene intake: WebMd URL
        </div>
        <div className = "modal-footer">
            <a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/caffeine/art-20045678" target="_blank">
            <button className = "button-help">I need help</button>
            </a>
            <button onClick = { props.onClose } className = "button-close">I'm in denial</button>
            </div>
        </div>
      </div>
    );
}

export default Modal