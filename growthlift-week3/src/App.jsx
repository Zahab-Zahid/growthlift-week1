import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Header />

      <div className="p-8">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </div>

    </div>
  );
}

export default App;