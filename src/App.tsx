import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Homepage from "./components/pages/Homepage";
import Contact from "./components/pages/Contact";
import LogiReg from "./components/pages/LogiReg";
import SendPasswordResetEmail from "./components/pages/SendPasswordResetEmail";
import ResetPassword from "./components/pages/ResetPassword";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LogiReg />} />
            <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route path="reset/:token" element={<ResetPassword />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path ="*" element={<h1> Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
