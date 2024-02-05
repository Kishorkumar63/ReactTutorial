import React, { useState } from "react";
import "./qrCode.css";
export const QrCode = () => {
  const [img, setImg] = useState("images/QR.png");
  const [lodaing, setLoading] = useState(false);
  const [qrdata, setQrData] = useState("");
  const [size, setSize] = useState();

  async function generateQr() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
        qrdata
      )}`;
      setImg(url);
      setQrData("");
      setSize("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  function downloadQr() {
    fetch(img)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = "qecode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        console.error("Dowload In Error", err);
      });
  }
  return (
    <div className="app-container">
      <div>
        <h1>QR CODE GENERATOR</h1>
        {lodaing && <p>please wait..</p>}
        {img && <img src={img} alt="qr.png" className="qr-code-img" />}
        <label htmlFor="dataInput" className="input-lbl">
          Qr Code
        </label>
        <input
          type="text"
          id="dataInput"
          placeholder="enter the Data"
          onChange={(e) => setQrData(e.target.value)}
          value={qrdata}
        />
        <label htmlFor="sizeInput" className="input-lbl">
          Image Size (e.g.,150)
        </label>
        <input
          type="text"
          id="sizeInput"
          placeholder="enter Image Size"
          onChange={(e) => e.target.valu}
          value={size}
        />
        <br />
        <br />
        <button
          className="generate-btn"
          disabled={lodaing}
          onClick={generateQr}
        >
          Generate QR Code
        </button>
        <button className="download-btn" onClick={downloadQr}>
          Download QR COde
        </button>
      </div>
      <p className="footer">Designed By KK</p>
    </div>
  );
};
