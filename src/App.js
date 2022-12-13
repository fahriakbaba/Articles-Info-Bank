import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Article from './pages/Article';
import data from "./data";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="about" element={<About />} />
        <Route path='profile/:profileID' element={<Profile data={data} />} /> 
        <Route path='article/:articleID' element={<Article data={data} />} /> 
      </Routes>
    </div>
  ); 
}

export default App;
