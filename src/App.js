import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Article from './pages/Article';
import database from "./data";

function App() {
  const [lang, setLang] = React.useState(JSON.parse(localStorage.getItem("lang")) || "en");
  const [data, setData] = React.useState(database);

  React.useEffect( () => {
    localStorage.setItem("lang", JSON.stringify(lang));
    setData(database);
    
  }, [lang]);

  console.log(lang, data);

  return (
    <div className="App">
      <Navbar setLang={setLang} lang={lang} />
      <Routes>
        <Route path="/" element={<Home data={data} lang={lang} />} />
        <Route path="about" element={<About />} />
        <Route path='profile/:profileID' element={<Profile data={data} />} /> 
        <Route path='article/:articleID' element={<Article data={data} />} /> 
      </Routes>
    </div>
  ); 
}

export default App;
