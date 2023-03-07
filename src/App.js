//import logo from './logo.svg';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Myway from './pages/Myway/Myway'
import Works from './pages/Works/Works'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/myway" element={<Myway />} />
                <Route path="/myworks" element={<Works />} />
            </Routes>
        </div>
    )
}

export default App
