import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    // let newText = text.toUpperCase();
    setText("new text");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");

  return (
    <form>
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
        <button className="btn btn-primary" onClick={handleUpperCase}>
          Convert to uppercase
        </button>
      </div>
    </form>
  );
}
