import Navbar from './Components/Navbar.jsx';
import Home from './Sections/Home.jsx';
import About from './Sections/About.jsx';
import Skils from './Sections/Skils.jsx';
import Project from './Sections/Project.jsx';
import Contact from './Sections/Contact.jsx';
import Footer from './Sections/Footer.jsx'; 
import ParticleBackground from './Components/ParticleBackground.jsx';
import CustomCursor from './Components/CustomCursor.jsx';
import Education from './Sections/Education.jsx'

export default function App(){
  
  return ( 
    <div className='relative gradientg text-white'>
    <CustomCursor/>
    {/* <ParticleBackground/>  */}

    <Navbar />
    <Home/>
    <About/>
    <Skils/>
    <Project/>
    <Education/>
    <Contact/>
    <Footer/>
    </div>
  )

 }