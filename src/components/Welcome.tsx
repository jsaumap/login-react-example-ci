import { Button } from "antd";
import { Link, Route, Switch } from "react-router-dom";
import { Login } from "./Login";
import { UserForm } from "./UserForm";
import { UserTable } from "./UserTable";

export const Welcome = () => {
  return (
    <div>
      Bienvenido
      <Button type="primary">
        <Link to="/Login">Iniciar sesion</Link>
      </Button>
      {"       "}
      <Button type="primary" danger>
        <Link to="/SignUp">Registrarse</Link>
      </Button>
    </div>
  );
};
