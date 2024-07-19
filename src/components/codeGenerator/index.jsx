import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQRCode] = useState("");
  const [input, setInput] = useState("");
  function handleGenerateQRCode() {
    setQRCode(input);
  }
  return (
    <div>
      <h1>QR code generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter value gere"
        />
        <button
          disabled={input && input.trim() === "" ? true : false}
          onClick={handleGenerateQRCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} />
      </div>
    </div>
  );
}
