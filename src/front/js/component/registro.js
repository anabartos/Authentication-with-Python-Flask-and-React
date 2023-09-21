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

const Registro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
};

return ( <
    >
    <
    form >
    <
    div class = "mb-3" >
    <
    label
    for = "exampleInputEmail1"
    class = "form-label" > Name < /label> <
    input type = "name"
    class = "form-control"
    id = "name"
    aria - describedby = "emailHelp" / >
    <
    /div> <
    div class = "mb-3" >
    <
    label
    for = "exampleInputEmail1"
    class = "form-label" > Last Name < /label> <
    input type = "last_name"
    class = "form-control"
    id = "last_name"
    aria - describedby = "emailHelp" / >
    <
    /div> <
    div class = "mb-3" >
    <
    label
    for = "exampleInputEmail1"
    class = "form-label" > Email address < /label> <
    input type = "email"
    class = "form-control"
    id = "email"
    aria - describedby = "emailHelp" / >
    <
    /div> <
    div class = "mb-3" >
    <
    label
    for = "exampleInputPassword1"
    class = "form-label" > Password < /label> <
    input type = "password"
    class = "form-control"
    id = "password" / >
    <
    /div> <
    div class = "mb-3 form-check" >
    <
    input type = "checkbox"
    class = "form-check-input"
    id = "exampleCheck1" / >
    <
    label class = "form-check-label"
    for = "exampleCheck1" > Check me out < /label> <
    /div> <
    button type = "submit"
    class = "btn btn-primary" > Submit < /button> <
    /form> <
    />
)
}
export default Registro