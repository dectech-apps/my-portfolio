import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Writes from "./pages/Writes";
import Bookmarks from "./pages/Bookmarks";
import Projects from "./pages/Projects";
import Goals from "./pages/Goals";
import Blog from "./pages/Blog";
import Component from "./pages/Components";
import Stack from "./pages/stacks";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/writes" element={<Writes />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/components" element={<Component />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/stacks" element={<Stack />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
