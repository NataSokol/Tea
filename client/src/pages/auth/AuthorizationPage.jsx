import React, { useContext, useState } from "react";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosInstance";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/AuthorizationPage.css";
function AuthorizationPage() {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosRequest.post("/auth/authorization", {
        email,
        password,
      });

      if (response.status === 200) {
        setUser(response.data.user);
        setError(null);
        navigate("/teas");
        return;
      }
    } catch ({ response }) {
      console.log(response.data.message);
      setError("Password or email does not match");
    }
  };

  return (
    <div className="authorization">
      <h1>Авторизация</h1>
      {error && <span>{error}</span>}
      <form onSubmit={onHandleSubmit} className="authorization-form">
        <input
          type="email"
          placeholder="Введите почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="authorization-form__input"
        />
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="authorization-form__input"
        />
        <button type="submit" className="authorization-form__button">
          Войти
        </button>
      </form>
      <div className="link-block">
        <NavLink to="/registration" className="authorization__link">
          Зарегистрироваться
        </NavLink>
      </div>
    </div>
  );
}

export default AuthorizationPage;
