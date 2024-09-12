import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosInstance";
function Navbar() {
  const { user, setUser } = useContext(AppContext);

  const onHandleLogout = async () => {
    try {
      const response = await axiosRequest.delete("/auth/logout");
      if (response.status === 200) {
        setUser(null);
        return;
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  return (
    <div>
      {user && <span>{`Welcome, ${user.name}!`}</span>}
      <ul>
        <li>
          <NavLink to="/">Main</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/authorization">Authorization</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/teas">Teas</NavLink>
        </li>
        <li>
          <NavLink to="/map">Map</NavLink>
        </li>
      </ul>
      {user && <button onClick={onHandleLogout}>Log out</button>}
    </div>
  );
}

export default Navbar;
