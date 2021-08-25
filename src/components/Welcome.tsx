import { Button } from "antd";
import { Link } from "react-router-dom";

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
