import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "../pages/auth/RegistrationPage";
import { AppContext } from "./AppContext";
import "./App.css";
import Navbar from "../widgets/navbar/Navbar";
import AuthorizationPage from "../pages/auth/AuthorizationPage";
import { axiosRequest } from "../services/axiosInstance";

function App() {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    const response = await axiosRequest.get("/tokens/refresh");
    if (response.status === 200) {
      setUser(response.data.user);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  
  return (
    <>
      <AppContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
