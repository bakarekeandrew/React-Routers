import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { Routes, Route, Link } from 'react-router-dom'


function App() 
  {

    return (
      <>
        <header>
          <Link className="site-logo" to="/">#VanLife</Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
  </>

  
  );
}

export default App
