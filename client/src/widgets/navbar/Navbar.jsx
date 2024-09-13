
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../../app/AppContext';
import { axiosRequest } from '../../services/axiosInstance';
import './Navbar.css';


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

  const HeartIcon = () => (
    <svg
      className="navbar__favorites"
      width="30"
      height="30"
      viewBox="0 0 16 16"
      fill="white" /* Изначальный цвет */
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" />
    </svg>
  );

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

          <NavLink to='/teas' className='nav-link'>

            Чай
          </NavLink>
        </li>
        <li>

          <NavLink to='/map' className='nav-link'>

            Карта
          </NavLink>
        </li>



       

        {!user ? (
          <li>
            <NavLink to="/authorization" className="nav-link">
              Авторизация
            </NavLink>
          </li>
        ) : null}
        <li className="navbar-fav">
          <NavLink to="/favorites" className="nav-link">
            {HeartIcon}


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
