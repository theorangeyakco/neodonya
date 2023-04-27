import React, { useEffect, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const DesktopChat = ({ iframeSrc }) => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = e => {
      console.log(window.scrollY);
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <motion.div
          onClick={() => {
            setChatOpen(x => !x);
          }}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            zIndex: 1000,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <Button text={"Chat with us"} />
        </motion.div>
      )}

      {showButton && isChatOpen && (
        <motion.div className="chat-popup__container">
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
        </motion.div>
      )}
    </div>
  );
};

export default DesktopChat;
