import { Container } from "./Containter";
import Header from "./components/Header";
import Logo from "./components/Logo";
import TodayPage from "./pages/TodayPage";
//import PrevPage from "./pages/PrevPage";
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
          <Route path="/main" element={<TodayPage />} />
          {/* <Route path="/prev" element={<PrevPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
