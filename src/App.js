import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Projets from './Pages/Projets/Projets'
import NotFound from './Pages/NotFound/NotFound'
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

function App() {
    const location = useLocation()
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/projets/:id" element={<Projets />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
                <Route
                    path="/notfound"
                    element={() =>
                        (location.pathname = '/' ? (
                            <Home />
                        ) : (
                            <Navigate to="/*" />
                        ))
                    }
                />
                <Route
                    path="/notfound"
                    element={() =>
                        (location.pathname = '/about' ? (
                            <About />
                        ) : (
                            <Navigate to="/*" />
                        ))
                    }
                />
                <Route
                    path="/notfound"
                    element={() =>
                        (location.pathname = '/projets' ? (
                            <Projets />
                        ) : (
                            <Navigate to="/*" />
                        ))
                    }
                />
                <Route
                    path="/notfound"
                    element={() =>
                        (location.pathname = '/contact' ? (
                            <Contact />
                        ) : (
                            <Navigate to="/*" />
                        ))
                    }
                />
            </Routes>
        </div>
    )
}

export default App
