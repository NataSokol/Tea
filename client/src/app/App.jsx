import RegistrationPage from "../pages/auth/RegistrationPage";
import { AppContext } from "./AppContext";

import Navbar from "../widgets/navbar/Navbar";
import AuthorizationPage from "../pages/auth/AuthorizationPage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosRequest } from "../services/axiosInstance";
import TeasPage from "../page/tea/TeasPage";
import TeaItems from "../page/tea/TeaItems";
import "./App.css";
import { setAccessToken } from "../services/axiosInstance";

function App() {
  const [user, setUser] = useState(undefined);
  const [teas, setTeas] = useState([]);
  
  


  const checkUser = async () => {
    const response = await axiosRequest.get("/tokens/refresh");
    if (response.status === 200) {
      setUser(response.data.user);
      setAccessToken(response.data.accessToken)
    }
  };

  const getAllTea = async () => {
    try {
      const response = await axiosRequest.get("/teas");
      if (response.status === 200) {
        setTeas(response.data);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    checkUser();
    getAllTea();
  }, []);

  return (
    <>
   
      <AppContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />

           <Route
          path='/teas'
          element={<TeasPage teas={teas} setTeas={setTeas} />}
        />
         <Route
          path='/teas/:id'
          element={<TeaItems teas={teas} setTeas={setTeas} />}
        />

        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
