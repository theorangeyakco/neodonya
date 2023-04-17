// import { Unity, useUnityContext } from "react-unity-webgl";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

// var config = {
//     dataUrl: buildUrl + "/v0.1.0.data",
//     frameworkUrl: buildUrl + "/v0.1.0.framework.js",
//     codeUrl: buildUrl + "/v0.1.0.wasm",
//     symbolsUrl: buildUrl + "/v0.1.0.symbols.json",
//     streamingAssetsUrl: "StreamingAssets",
//     companyName: "Tadpul Technology",
//     productName: "TadpulAvatars",
//     productVersion: "0.1",
//     showBanner: unityShowBanner,
//   };

const ChatC = dynamic(() => import("../components/ChatC"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ChatS = () => {
  return (
    <>
      <ChatC />
      {/* <Footer /> */}
    </>
  );
};

export default ChatS;
