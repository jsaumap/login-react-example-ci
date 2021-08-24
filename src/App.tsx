import { Login } from "./components/Login";
import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";


function App() {
  return (
    <div className="container">
      <Login/>
      <br /><hr />
      <UserForm/>
      <br /><hr />
      <UserTable></UserTable>
    </div>
  );
}

export default App;
