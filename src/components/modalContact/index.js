import Modal from 'react-modal';
import {useState} from "react";

function ModalContact() {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Minimal Modal Example"
        >
            <h2>Minimal Modal</h2>
            <div>I am a modal</div>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <button>Send</button>
            </form>
            <button onClick={closeModal}>close</button>
        </Modal>
    );
}

export default ModalContact;