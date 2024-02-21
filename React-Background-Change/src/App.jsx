import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#121212");
  const [textColor, setTextColor] = useState("#ffffff");

  const whiteBg = () => {
    setBgColor("white");
    setTextColor("black");
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center pt-12"
        style={{ backgroundColor: bgColor }}
      >
        <h1 className=" font-bold text-8xl" style={{ color: textColor }}>
          Hello This Is Kaif!
        </h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
            <button
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setBgColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setBgColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setBgColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg"
              style={{ backgroundColor: "white" }}
              onClick={whiteBg}
            >
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
