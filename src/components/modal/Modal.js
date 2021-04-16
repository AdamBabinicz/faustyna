import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Modal from "react-modal";

function Modal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Tytuł</h2>
        <p>Body modal</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal> */}
    </div>
  );
}

export default Modal;

// ReactDOM.render(<App />, appElement);
