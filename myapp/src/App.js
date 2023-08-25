import TodayPage from "./pages/TodayPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import RecordPage from "./pages/RecordPage";
import ChallengePage from "./pages/ChallengePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/main" element={<TodayPage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/report" element={<ReportPage />} />

          <Route path="/challenge" element={<ChallengePage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
