import React, { useContext, useState } from "react";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosInstance";
function AuthorizationPage() {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
        return;
      }
    } catch ({ response }) {
      console.log(response.data.message);
      setError("Password or email does not match");
    }
  };

  return (
    <div>
      <h1>Authorization</h1>
      {error && <span>{error}</span>}
      <form onSubmit={onHandleSubmit}>
        <input
          type="email"
          placeholder="Enter a email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default AuthorizationPage;
