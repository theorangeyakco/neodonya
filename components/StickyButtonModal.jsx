import React, { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";

// Make sure to bind the modal to your app element
Modal.setAppElement("#__next");

const StickyButtonModal = ({ iframeSrc }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div
        onClick={openModal}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          zIndex: 1000,
        }}
      >
        <Button text={"Chat with us"} />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1002,
            width: "100vw",
            height: "100vh",
          },
          content: {
            position: "relative",
            top: "auto",
            left: "auto",
            right: "auto",
            bottom: "auto",
            height: "100%",
            width: "100%",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            outline: "none",
            background: "none",
            border: "none",
            padding: "0px",
            borderRadius: "0px",
          },
        }}
      >
        <div className="iframe-wrapper">
          <iframe
            src="https://neodonyademo.web.app"
            title="example website"
            className="iframe-content"
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px 0",
          }}
        >
          <div onClick={closeModal}>
            <Button text={"Close"} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StickyButtonModal;
