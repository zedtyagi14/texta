import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  const [darkmode, setDarkmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (darkmode === 'light') {
      setDarkmode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "Success");
    }
    else {
      setDarkmode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "Success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={darkmode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;