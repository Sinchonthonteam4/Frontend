import "./App.css";
import { Container } from "./Containter";
import Header from "./components/Header";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Container>
        <Logo />
        <Header text="로그인 하기" />
      </Container>
    </div>
  );
}

export default App;
