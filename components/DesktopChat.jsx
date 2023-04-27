import React, { useState } from "react";
import Button from "./Button";

const DesktopChat = ({ iframeSrc }) => {
  const [isChatOpen, setChatOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          console.log("beehnchjod");
          setChatOpen(true);
        }}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          zIndex: 1000,
        }}
      >
        <Button text={"Chat with us"} />
      </div>

      {isChatOpen && (
        <div className="chat-popup__container">
          <div className="chat-popup__controls">
            <div style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Chat with us
            </div>

            <div onClick={() => setChatOpen(false)}>
              <Button text={"Close"} />
            </div>
          </div>
          <div className="chat-popup__iframe-wrapper">
            <iframe
              src={iframeSrc}
              frameborder="0"
              className="chat-popup__iframe"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopChat;
