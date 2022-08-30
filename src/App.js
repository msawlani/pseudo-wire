import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Learn from "./Components/Learn/Learn";
import LearnDetails from "./Components/Learn/LearnDetails";
import Code from "./Shared/Data/Code.json";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          {Code.Languages.map((data) => (
            <Route
              path={`/:${data.title}`}
              element={<LearnDetails language={data.title} />}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
