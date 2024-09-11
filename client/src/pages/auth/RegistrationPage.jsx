import React, { useContext, useState } from "react";
import { AppContext } from "../../app/AppContext";
import { axiosRequest, setAccessToken } from "../../services/axiosInstance";
function RegistrationPage() {
  const { setUser } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState(null);
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
          return;
        }
      }
      setError("The passwords don't match!");
    } catch ({ response }) {
      return response.data.message;
    }
  };
  return (
    <div>
      <h1>Registration</h1>
      {error && <span>{error}</span>}
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Check password"
          value={checkPass}
          onChange={(e) => setCheckPass(e.target.value)}
        />
        <input
          type="text"
          placeholder="Avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
