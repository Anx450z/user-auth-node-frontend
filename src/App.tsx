import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Homepage from "./components/pages/Homepage";
import Contact from "./components/pages/Contact";
import LogiReg from "./components/pages/LogiReg";
import SendPasswordResetEmail from "./components/pages/SendPasswordResetEmail";
import ResetPassword from "./components/pages/ResetPassword";
import Profile from "./components/pages/Profile";
import { useSelector } from "react-redux";

function App() {
  const {token} = useSelector(state=>(state as any).auth)
  console.log("app token ===",token)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={!token ? <LogiReg /> : <Navigate to="/profile" />} />
            <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          </Route>
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path ="*" element={<h1> Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
