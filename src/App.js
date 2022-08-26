import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
