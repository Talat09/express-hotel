import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
const Register = () => {
  const { createUser, updateNamePhoto, EmailVerification } =
    useContext(AuthContext);
  useTitle("Register");
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateNamePhoto(name, photo);
        verification();
        toast.success("please verify your email address check inbox or spam ");
        console.log(user);
        form.reset();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log(name, photo, email, password);
  };
  const verification = () => {
    EmailVerification()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  const handleChecked = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <Form
      onSubmit={handleRegister}
      className="w-50 border border-primary rounded-4 p-5 mx-auto shadow-lg mb-5 mt-5 "
    >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control
          name="photo"
          type="text"
          placeholder="Enter Your PhotoURL"
        />
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleChecked}
          name="checked"
          type="checkbox"
          label={
            <>
              Accept <Link to="/terms">Terms & Conditions</Link>
            </>
          }
        />
      </Form.Group>
      <Form.Text className="text-danger">
        <p>{error}</p>
      </Form.Text>
      <p>
        Already have an account? <Link to="/login">Login</Link>{" "}
      </p>
      <Button variant="dark" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
