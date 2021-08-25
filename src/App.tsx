import { BrowserRouter as Router } from "react-router-dom";
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
