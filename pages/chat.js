import { Unity, useUnityContext } from "react-unity-webgl";
import Footer from "../components/Footer";

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

const Chat = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "glbuild/v0.1.0.loader.js",
        dataUrl: "glbuild/v0.1.0.data",
        frameworkUrl: "glbuild/v0.1.0.framework.js",
        codeUrl: "glbuild/v0.1.0.wasm",
        symbolsUrl: "glbuild/v0.1.0.symbols.json",
        companyName: "Tadpul Technology",
        productName: "TadpulAvatars",
        productVersion: "0.1",
        // showBanner: unityShowBanner,
      });
  return (
    <>
        <h1>Chat</h1>
        <Unity id={1} unityProvider={unityProvider} />
      <Footer />
    </>
  );
};

export default Chat;
