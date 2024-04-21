import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "B",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "hex") handleCreateRandomHexColor();
    else handleCreateRandomRgbColor();
  }, [typeOfColor]);

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <div className="">
        <button
          onClick={() => setTypeOfColor("hex")}
          className="bg-white text-black border-2 border-black m-10 p-1"
        >
          Generate HEX color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="bg-white text-black border-2 border-black m-10 p-1"
        >
          Generate RGB color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          className="bg-white text-black border-2 border-black m-10 p-1"
        >
          Generate another color
        </button>
        <div className="flex flex-col content-center justify-center color-white text-xl mt-10">
          <h3>{typeOfColor === "hex" ? "HEX color" : "RGB color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
}
