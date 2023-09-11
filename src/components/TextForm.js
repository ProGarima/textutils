import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpperClick = () => {
    // console.log("uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success")
  };
  const handleLowerClick = () => {
    // console.log("uppercase clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success")
  };
  const handleClear = () => {
    // console.log("uppercase clicked");
    setText("");
    props.showAlert("Cleared!", "success")
  };
  const handleOnChange = (e) => {
    // console.log("handleOnChange clicked");
    setText(e.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success")
  };

  const handleSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra whitespaces removed", "success")
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "gray" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="8"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "gray",
            }}
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
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpace}>
          Remove Extra space
        </button>
      </div>
      <div className="container my-2 mx-2" style={{ color: props.mode === "dark" ? "white" : "gray" }}>
        <h2>Your text here</h2>
        <p>
          {(text.split(/[ ]+/).length)-1} words & {text.length} characters  
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
