import TodayPage from "./pages/TodayPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import RecordPage from "./pages/RecordPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/main" element={<TodayPage />} />
          <Route path="/record" element={<RecordPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
