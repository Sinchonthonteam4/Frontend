import "./App.css";
import { Container } from "./Containter";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
