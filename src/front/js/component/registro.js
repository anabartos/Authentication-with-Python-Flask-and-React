import React, {
    useState,
    useContext
} from "react";
import {
    Context
} from "../store/appContext";
import {
    Link,
    useNavigate
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Registro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const {store, actions} = useContext (Context);

const ChangeName = (e) => {
    setName(e.target.value);
}  
const ChangeLastName = (e) => {
    setLastName(e.target.value);
} 
const ChangeEmail = (e) => {
    setEmail(e.target.value);
} 
const ChangePassword = (e) => {
  setPassword(e.target.value);
}    

const Register = async(e) => {
  e.preventDefault()
  try {
    const correcto = await actions.crearUsuario(email, password, name, last_name)
    if(correcto) {
      console.log("usuario registrado")
    }else {
      console.log("No se ha podido crear el usuario")
    }
  }catch (error){
    console.log(error)
  }
}

return (
  <>
    <form onSubmit={Register} className="mx-5">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="name" value={name} onChange={ChangeName} className="form-control" id="name" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="last_name" className="form-label">
          Last Name
        </label>
        <input type="last_name" value={last_name} onChange={ChangeLastName} className="form-control" id="last_name" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input type="email" value={email} onChange={ChangeEmail} className="form-control" id="email" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" value={password} onChange={ChangePassword} className="form-control" id="password" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </>
);
};

export default Registro;