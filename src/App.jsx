import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';

import Home from "./pages/home";
import About from "./pages/about";
import Project from './pages/project';
import Experience from './pages/experience';
import Certificate from "./pages/certificate";
import Contact from './pages/contact';

import Footer from './components/Footer';

function App() {

  return (
    <>
    
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/certificate' element={<Certificate/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
      <Footer/>
    
    </>
  )
}

export default App
