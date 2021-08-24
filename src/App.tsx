import { BrowserRouter as Router } from "react-router-dom";
import { LayoutPage } from "./components/LayoutPage";
import { Login } from "./components/Login";
import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";
import { Welcome } from "./components/Welcome";
import { AppRouter } from "./Routers/AppRouter";

function App() {
  return (
    <div className="welcome" style={{ minHeight: "100vh" }}>
    <Router>
      <AppRouter />
    </Router>
    </div>
  );
}

export default App;
