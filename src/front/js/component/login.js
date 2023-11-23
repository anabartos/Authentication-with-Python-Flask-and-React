import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const ChangeName = (e) => {
    setName(e.target.value);
  };
  const ChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const ChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const ChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const inicioUsuario = async (e) => {
    e.preventDefault();
    try {
      const correcto = await actions.loginUser(email, password, name, last_name);
      if (correcto) {
        console.log("usuario logueado");
        actions.private();
        navigate("/private");
      } else {
        console.log("No se ha podido crear el usuario");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <form onSubmit={inicioUsuario} className="w-50 d-grid">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={ChangeName}
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            value={last_name}
            onChange={ChangeLastName}
            className="form-control"
            id="last_name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={ChangeEmail}
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={ChangePassword}
            className="form-control"
            id="password"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary justify-content-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;


