import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div
      className="w-full h-screen duration-200 text-white flex flex-wrap justify-center py-24 text-5xl"
      style={{ backgroundColor: color }}
    >
      {" "}
      Background Color Changer
      <div className="fixed flex  flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-neutral-600
        rounded-full py-4 px-10 text-lg"
        >
          <button
            className="text-black outline-none px-6 py-3 rounded-full"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="text-black outline-none px-6 py-3 rounded-full"
            style={{ backgroundColor: "Blue" }}
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>
          <button
            className="text-black outline-none px-6 py-3 rounded-full"
            style={{ backgroundColor: "Yellow" }}
            onClick={() => setColor("Yellow")}
          >
            Yellow
          </button>
          <button
            className="text-black outline-none px-6 py-3 rounded-full"
            style={{ backgroundColor: "Green" }}
            onClick={() => setColor("Green")}
          >
            Green
          </button>
          <button
            className="text-black outline-none px-6 py-3 rounded-full"
            style={{ backgroundColor: "Purple" }}
            onClick={() => setColor("Purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
