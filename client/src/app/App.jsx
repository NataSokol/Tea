import { AppContext } from "./AppContext";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosRequest } from "../services/axiosInstance";
import { setAccessToken } from "../services/axiosInstance";
import RegistrationPage from "../pages/auth/RegistrationPage";
import AuthorizationPage from "../pages/auth/AuthorizationPage";
import TeasPage from "../pages/tea/TeasPage";
import TeaItems from "../pages/tea/TeaItems";
import Navbar from "../widgets/navbar/Navbar";
import MapComponent from "../pages/tea/MapComponent";
import "./App.css";
import MainPage from "../pages/main/MainPage";

function App() {
  const [user, setUser] = useState(undefined);
  const [teas, setTeas] = useState([]);

  const checkUser = async () => {
    const response = await axiosRequest.get("/tokens/refresh");
    if (response.status === 200) {
      setUser(response.data.user);
      setAccessToken(response.data.accessToken);
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
          <Route path="/" element={<MainPage />}/>
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />

          <Route
            path="/teas"
            element={<TeasPage teas={teas} setTeas={setTeas} />}
          />
          <Route
            path="/teas/:id"
            element={<TeaItems teas={teas} setTeas={setTeas} />}
          />
          <Route
            path="/map"
            element={<MapComponent teas={teas} setTeas={setTeas} />}
          />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
