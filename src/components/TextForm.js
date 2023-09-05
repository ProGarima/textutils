import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpperClick = () => {
    // console.log("uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    // console.log("uppercase clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    // console.log("uppercase clicked");
    setText("");
  };
  const handleOnChange = (e) => {
    // console.log("handleOnChange clicked");
    setText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text  here"
            rows="8"
            value={text}
            id="myBox"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>
          Convert to uppper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear All
        </button>
      </div>
      <div className="container my-2">
        <h2>Your text here</h2>
        <p>{text.split(" ").length} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
