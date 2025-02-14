import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Favorites } from "./pages/Favorites/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
