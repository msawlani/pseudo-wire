import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Learn from "./Components/Learn/Learn";
import LearnDetails from "./Components/Learn/LearnDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/:link_id" element={<LearnDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
