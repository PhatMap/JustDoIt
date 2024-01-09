import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage'
import Header from "./components/Layout/Header";
import Footer from './components/Layout/Footer';


function App() {

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App
