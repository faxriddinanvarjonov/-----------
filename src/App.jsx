import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
function App() {
  let [chechBox, setCheckBox] = useState(false);
  let [photo, setPhoto] = useState("");
  let check = useRef(false);
  let video = useRef();
  function handleChange() {
    chechBox == true ? setCheckBox(false) : setCheckBox(true);
    console.log(check.current.value);
  }

  return (
    <section className="container max-w-screen-lg mx-auto pt-4">
      <div className="flex bg-slate-600 px-8 py-2 rounded-xl justify-between shadow-lg shadow-gray-900">
        <button
          onClick={() => {
            video.current && setPhoto(video.current.getScreenshot());
          }}
          className="btn btn-outline text-xl text-zinc-100 hover:text-green-400"
        >
          Screenshot
        </button>
        <div className="flex items-center gap-2">
          <label
            htmlFor="check"
            className="text-yellow-50 text-lg select-none hover:opacity-80"
          >
            Web Cam:
          </label>
          <input
            ref={check}
            id="check"
            type="checkbox"
            className="toggle toggle-lg hover:opacity-80"
            value={!chechBox}
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        className={
          check.current.value == "true"
            ? "container max-w-screen-lg mx-auto min-h-[200px] sm:min-h-[500px] my-5 rounded-xl shadow-lg shadow-gray-900 flex items-center justify-center bg-slate-700 animate-pulse"
            : "container max-w-screen-lg mx-auto min-h-[200px] sm:min-h-[500px] my-5 rounded-xl shadow-lg shadow-gray-900 flex items-center justify-center"
        }
      >
        <h1 className="text-zinc-100 text-2xl select-none animate-bounce hover:animate-none">
          {check.current.value != "true" && "Your camera isn't recording"}
        </h1>
        {check.current.value == "true" && (
          <Webcam
            ref={video}
            className="flex rounded-xl"
            audio={false}
            screenshotQuality={1}
            videoConstraints={{
              facingMode: "user",
            }}
          />
        )}
      </div>
      <div className="flex bg-slate-600 px-8 py-2 rounded-xl items-center gap-3 justify-center shadow-lg shadow-gray-900 flex-col">
        <h2 className="text-white text-xl">Screenshots:</h2>
        {photo && (
          <img
            className="w-[300px] rounded-xl cursor-pointer"
            src={photo}
          ></img>
        )}
        <a
          href={photo}
          download
          onClick={() => {}}
          className="btn btn-outline text-white hover:text-yellow-50"
        >
          Save
        </a>
      </div>
    </section>
  );
}

export default App;
