import Home from './Components/Home/Home.js'
import About from './Components/About/About.js'
import Skills from './Components/Skills/Skills.js'
// import Education from './Components/Education/Education.js'
import Portfolio from './Components/Portfolio/Portfolio.js'
import Contact from './Components/Contact/Contact.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (


    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='Skills' element={<Skills />} />
          {/* <Route path='education' element={<Education />} /> */}
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
