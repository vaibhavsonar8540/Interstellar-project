import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    axios.post("https://reqres.in/api/login", { email, password })
      .then((response) => {
        loginUser (response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              required
            />
          </label>
        </div>
        <br />
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <br />
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Login;
