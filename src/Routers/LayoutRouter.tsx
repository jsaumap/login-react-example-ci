
import { Switch, Route } from "react-router-dom";
import { UserForm } from "../components/UserForm";
import { UserTable } from "../components/UserTable";

export const LayoutRouter = () => {
  return (
    <Switch>
      <Route exact path="/User/UserTable" component={UserTable} />
      <Route exact path="/User/UserForm" component={UserForm} />
    </Switch>
  );
};
