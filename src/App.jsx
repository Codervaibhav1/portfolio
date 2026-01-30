
import NavBar from './components/NavBar'
import Profile from './components/Profile'
// import ProflieImage from './components/ProflieImage'
import About from './components/About'
import Skill from './components/Skill'
import Intership from './components/Intership'
import Projects from './components/Projects'
import Education from './components/Education'
import Contect from './components/Contect'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <NavBar/>
      <div className='container'>
        <Profile/>
        {/* <ProflieImage/> */}
        <About/>
        <Skill/>
        <Intership/>
        <Projects/>
        <Education/>
        <Contect/>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default App