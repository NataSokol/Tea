import React, { useContext, useState } from "react";
import { AppContext } from "../../app/AppContext";
import { axiosRequest, setAccessToken } from "../../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import "../css/RegistrationPage.css";
function RegistrationPage() {
  const { setUser } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const onHandleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (password === checkPass) {
        const response = await axiosRequest.post("/auth/registration", {
          name,
          email,
          password,
          avatar,
        });
        if (response.status === 201) {
          setUser(response.data.user);
          setAccessToken(response.data.accessToken);
          navigate("/teas");
          return;
        }
      }
      setError("The passwords don't match!");
    } catch ({ response }) {
      return response.data.message;
    }
  };
  return (
    <div className="registration">
      <h1>Регистрация</h1>
      {error && <span>{error}</span>}
      <form onSubmit={onHandleSubmit} className="registration-form">
        <input
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="registration-form__input"
        />
        <input
          type="email"
          placeholder="Введите почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="registration-form__input"
        />
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="registration-form__input"
        />
        <input
          type="password"
          placeholder="Введите пароль повторно"
          value={checkPass}
          onChange={(e) => setCheckPass(e.target.value)}
          className="registration-form__input"
        />
        <input
          type="text"

          placeholder="Введите ссылку на фото"

          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="registration-form__input"
        />
        <button type="submit" className="registration-form__button">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
