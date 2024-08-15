import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import Error from './pages/Error';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}