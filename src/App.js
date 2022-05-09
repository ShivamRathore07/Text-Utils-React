import React, { useState } from 'react';
import './App.css'; 
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { TextForm } from './components/TextForm';

 
function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
  
    <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}></Route>
          <Route exact path="/about" element={<About mode={mode} />}></Route> 
    </Routes>

 
    </BrowserRouter>
    </> 
  );
}

export default App;