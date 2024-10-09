import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); // Wether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1600);
  }

  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success');
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <>
      <Navbar title= "TextUtils" aboutText= "About" mode={mode} toggleMode ={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
      

      </>
      )
    },
    {
      path: "/about",
      element: (
        <>
        <Navbar title= "TextUtils" aboutText= "About" mode={mode} toggleMode ={toggleMode}/>
        <Alert alert={alert}/>
        <About mode={mode}/>

        </>
      )    
    },
  ])


  return (
   <>
   <RouterProvider router={router} />

   </>
  );
}

export default App;
