import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
