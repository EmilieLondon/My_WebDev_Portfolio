import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
