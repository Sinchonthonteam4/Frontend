import "./App.css";
import { Container } from "./Containter";
import Header from "./components/Header";
import Logo from "./components/Logo";
import TodayPage from "./pages/TodayPage";
import PrevPage from "./pages/PrevPage";

function App() {
  return (
    <div className="App">
      <Container>
        <Logo />
        {/* <Header text="로그인 하기" /> */}
        <TodayPage />
      </Container>
    </div>
  );
}

export default App;
