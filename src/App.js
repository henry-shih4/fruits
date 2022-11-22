import "./App.css";
import Home from "./components/Home";
import Watermelon from "./components/Watermelon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Orange from "./components/Orange";
import Kiwi from "./components/Kiwi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="watermelon" element={<Watermelon />}></Route>
          <Route path="orange" element={<Orange />}></Route>
          <Route path="kiwi" element={<Kiwi />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
