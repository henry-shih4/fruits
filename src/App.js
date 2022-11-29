import "./App.css";
import Home from "./components/Home";
import Watermelon from "./components/Watermelon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Orange from "./components/Orange";
import Kiwi from "./components/Kiwi";
import Banana from "./components/Banana";
import Strawberry from "./components/Strawberry";
import Blueberry from "./components/Blueberry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header  />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="watermelon" element={<Watermelon />}></Route>
          <Route path="orange" element={<Orange />}></Route>
          <Route path="kiwi" element={<Kiwi />}></Route>
          <Route path="banana" element={<Banana />}></Route>
          <Route path="strawberry" element={<Strawberry />}></Route>
          <Route path="blueberry" element={<Blueberry />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
