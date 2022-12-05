// import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from "./components/footer";
import Navbar from "./components/nav";
import Home from './components/home';
import Music from './pages/music';
import Resume from './pages/resume';
import Projects from './pages/projects';
import Blog from './pages/blog';
import ScrollButton from './components/ScrollButton';

console.log(`%cDeveloped By`, '🐦;background: rgb(255,140,0); color: #444; padding: 3px; border-radius: 5px;');
console.log(`     %cMat Lundin: matlundin.dev@gmail.com`, '🐦;background: lightblue; color: #444; padding: 3px; border-radius: 5px;');
export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/music' element={<Music />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path = '/dev' element={<Projects />}></Route>
          <Route path = '/blog' element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      <ScrollButton />
    </main>
  );
}


