import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Cleared!", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra whitespaces removed", "success");
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
              backgroundColor: props.mode === "dark" ? "#76838f" : "white",
              color: props.mode === "dark" ? "white" : "gray",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpperClick}
          disabled={text.length > 0 ? false : true}
        >
          Convert to uppper case
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowerClick}
          disabled={text.length > 0 ? false : true}
        >
          Convert to lower case
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClear}
          disabled={text.length > 0 ? false : true}
        >
          Clear All
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
          disabled={text.length > 0 ? false : true}
        >
          Copy to Clipboard
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleSpace}
          disabled={text.length > 0 ? false : true}
        >
          Remove Extra space
        </button>
      </div>
      <div
        className="container my-2 mx-2"
        style={{ color: props.mode === "dark" ? "white" : "gray" }}
      >
        <h2>Your text here</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
