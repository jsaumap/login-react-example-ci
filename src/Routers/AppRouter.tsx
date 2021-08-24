import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "../components/Login";
import { UserForm } from "../components/UserForm";
import { UserTable } from "../components/UserTable";
import { Welcome } from "../components/Welcome";
import { LayoutPage } from '../components/LayoutPage';


export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Welcome } />
        <Route exact path="/Login" component={ Login } />
        <Route exact path="/SignUp" component={ UserForm } />
        <Route path="/User/" component={LayoutPage} />
      </Switch>
    </Router>
  );
};
