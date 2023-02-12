import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
const Login = () => {
  const { Login, setLoading, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("Login");
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("verify your email address");
        }
        setError("");
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
    console.log(email, password);
  };
  return (
    <Form
      onSubmit={handleLogin}
      className="w-50 border border-primary rounded-4 p-5 mx-auto shadow-lg mb-5 mt-5 "
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter Your email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Enter Your Password"
        />
      </Form.Group>

      <Form.Text className="text-danger">
        <p>{error}</p>
      </Form.Text>
      <Button variant="dark" type="submit">
        Login
      </Button>
      <hr />

      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login With Google
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default Login;
