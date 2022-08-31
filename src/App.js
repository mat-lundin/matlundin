// import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from "./components/footer";
import Navbar from "./components/nav";
import Home from './components/home';
import Music from './pages/music';
import About from './pages/about';
import Resume from './pages/resume';
import Projects from './pages/projects';
import Blog from './pages/blog';

export default function App() {
//  const [currentPage, setCurrentPage] = useState('home');
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/music' element={<Music />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path = '/dev' element={<Projects />}></Route>
          <Route path = '/blog' element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}


