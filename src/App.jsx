import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Searched from "./Pages/Searched"
import LeftBar from './components/LeftBar/LeftBar'
import TopSection from './components/TopSection/TopSection'

const App = () => {
  return (
    <>
      <HashRouter>
        <LeftBar />
        <TopSection />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/search/:input" element={<Searched/>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
