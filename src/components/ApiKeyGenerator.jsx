import React, { useState } from "react";

function generateUUID() {
  var d = new Date().getTime();

  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now();
  }

  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
    c
  ) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });

  return uuid;
}
function ApiKeyGenerator() {
  const [apiKey, setApiKey] = useState("");
  const [btnText, setBtnText] = useState("Copy");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    setBtnText("Copied");
    setTimeout(() => {
      setBtnText("Copy");
    }, 1000);
  };

  return (
    <div className="keygen-container">
      <input type="text" id="apikey" value={apiKey} readOnly />

      <div className="buttons-container">
        <button id="keygen" onClick={() => setApiKey(generateUUID())}>
          Generate API Key
        </button>
        {apiKey && (
          <button
            className="copy-btn"
            style={{ backgroundColor: btnText === "Copied" ? "black" : "" }}
            onClick={copyToClipboard}
          >
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
}

export default ApiKeyGenerator;
