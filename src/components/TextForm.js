import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };
  const handleCopy = () => {
    var text = document.getElementById("floatingTextarea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = (event) => {
    setText("");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="floatingTextarea"
            rows={8}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remoove Extra Spaces
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={handleRemoveExSpace}>
          Removes Ex Spaces
        </button> */}
      </div>
      <div className="container my-3">
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
