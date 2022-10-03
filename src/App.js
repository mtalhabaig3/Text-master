import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mood has been enabled", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mood has been enabled", "success ");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1500);
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="Text Master" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={ */}
        <TextForm
          heading="Enter text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* } */}
        {/* ></Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
