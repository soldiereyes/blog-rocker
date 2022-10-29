import React, {useState} from "react";


const ModalContact = ({closeModal}) => {

    return (
            <div className='modal-background'>

                <div className='modal-container'>

                    <div className='title-close-btn'>
                        <button onClick={() => closeModal(true)}> X</button>
                    </div>

                    <div className='title-modal'>
                        <h1> Contact </h1>
                    </div>

                    <div className='body-modal'></div>

                    <div className='footer-modal'>
                        <button className='submit' onClick={() => closeModal(true)}> Submit</button>
                    </div>

                </div>
            </div>
    );
}
export default ModalContact;