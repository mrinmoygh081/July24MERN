import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
