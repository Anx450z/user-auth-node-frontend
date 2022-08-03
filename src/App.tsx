import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Homepage from './components/pages/Homepage';
import Contact from './components/pages/Contact';
import LogiReg from './components/pages/LogiReg';
import SendPasswordResetEmail from './components/pages/SendPasswordResetEmail';
import ResetPassword from './components/pages/ResetPassword';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Layout />}>  
        <Route index element={<Homepage />}/>
        <Route path = "contact" element={<Contact />}/>
        <Route path = "login" element={<LogiReg />}/>
        <Route path = "sendpasswordresetemail" element={<SendPasswordResetEmail />}/>
        <Route path = "reset/:token" element={<ResetPassword />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
