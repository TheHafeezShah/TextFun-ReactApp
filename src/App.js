//import About from "./Components/About.js"
import NavBar from "./Components/NavBar.js";
import TextForm from "./Components/TextForm.js";
import Alert from "./Components/Alert.js";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1400);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("dark mode activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode activated", "success");
    }
  };
  return (
    <>
      <NavBar
        title="TextFun"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Try TextFun-Enter text below to analyze" mode={mode} />
      </div>
    </>
  );
}
export default App;
