import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success ");
  };
  const handleCopy = () => {
    var text = document.getElementById("floatingTextarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied to clipboard", "success ");
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success ");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = (event) => {
    props.showAlert("Cleared text", "success ");
    setText("");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success ");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div
          className="mb-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="floatingTextarea"
            rows={8}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpperCase}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleLowerCase}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={handleRemoveExSpace}>
          Removes Ex Spaces
        </button> */}
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>your text summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something above in the box to preview it here"}
        </p>
      </div>
    </>
  );
}
