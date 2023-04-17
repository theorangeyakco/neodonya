import { useEffect } from "react";
import { useRef } from "react";

const ChatC = () => {
  return (
    <div className="iframe-wrapper">
      <iframe
        src="https://neodonyademo.web.app"
        title="example website"
        className="iframe-content"
      />
    </div>
  );
};

export default ChatC;
