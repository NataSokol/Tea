import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosInstance";
import "./Navbar.css";

function Navbar() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const onHandleLogout = async () => {
    try {
      const response = await axiosRequest.delete("/auth/logout");
      if (response.status === 200) {
        setUser(null);
        navigate("/");
        return;
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="logo">
          TeaStore
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/teas" className="nav-link">
            Чай
          </NavLink>
        </li>
        <li>
          <NavLink to="/map" className="nav-link">
            Карта
          </NavLink>
        </li>
        <li>
          <NavLink to="/authorization" className="nav-link">
            Авторизация
          </NavLink>
        </li>
      </ul>
      {user ? (
        <div className="user">
          <span className="span-hello">{`Добро пожаловать, ${user.name}!`}</span>
          <button className="logout" onClick={onHandleLogout}>
            Выйти
          </button>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
