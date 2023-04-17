import { useEffect } from "react";
import { useRef } from "react";

const ChatC = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const loadingBarRef = useRef(null);
  const progressBarFullRef = useRef(null);
  const warningBannerRef = useRef(null);

  const buildUrl = "/glbuild/";
  const loaderUrl = buildUrl + "/v0.1.0.loader.js";
  const config = {
    dataUrl: buildUrl + "/v0.1.0.data",
    frameworkUrl: buildUrl + "/v0.1.0.framework.js",
    codeUrl: buildUrl + "/v0.1.0.wasm",
    symbolsUrl: buildUrl + "/v0.1.0.symbols.json",
    streamingAssetsUrl: "/chat/",
    companyName: "Tadpul Technology",
    productName: "TadpulAvatars",
    productVersion: "0.1",
    showBanner: unityShowBanner,
  };

  // By default Unity keeps WebGL canvas render target size matched with
  // the DOM size of the canvas element (scaled by window.devicePixelRatio)
  // Set this to false if you want to decouple this synchronization from
  // happening inside the engine, and you would instead like to size up
  // the canvas DOM size and WebGL render target sizes yourself.
  // config.matchWebGLToCanvasSize = false;

  // Shows a temporary message banner/ribbon for a few seconds, or
  // a permanent error message on top of the canvas if type=='error'.
  // If type=='warning', a yellow highlight color is used.
  // Modify or remove this function to customize the visually presented
  // way that non-critical warnings and error messages are presented to the
  // user.
  function unityShowBanner(msg, type) {
    function updateBannerVisibility() {
      warningBannerRef.current.style.display = warningBannerRef.current.children
        .length
        ? "block"
        : "none";
    }

    var div = document.createElement("div");
    div.innerHTML = msg;
    warningBannerRef.current.appendChild(div);
    if (type == "error") div.style = "background: red; padding: 10px;";
    else {
      if (type == "warning") div.style = "background: yellow; padding: 10px;";
      setTimeout(function () {
        warningBannerRef.current.removeChild(div);
        updateBannerVisibility();
      }, 5000);
    }
    updateBannerVisibility();
  }

  useEffect(() => {
    loadingBarRef.current.style.display = "block";

    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      console.log(createUnityInstance);
      createUnityInstance(canvasRef.current, config, progress => {
        progressBarFullRef.current.style.width = 100 * progress + "%";
      })
        .then(unityInstance => {
          loadingBarRef.current.style.display = "none";
        })
        .catch(message => {
          alert(message);
        });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id="unity-container" ref={containerRef}>
      <canvas id="unity-canvas" ref={canvasRef} tabIndex="-1"></canvas>
      <div id="unity-loading-bar" ref={loadingBarRef}>
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full" ref={progressBarFullRef}></div>
        </div>
      </div>
      <div id="unity-warning" ref={warningBannerRef}></div>
    </div>
  );
};

export default ChatC;
