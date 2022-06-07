import './App.css';
import Contact from './components/Contact'
import About from './components/AboutDisplay';
import Nav from './components/Nav';
import Home from './components/Home';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import SvgComponent from './subComponents/HomeButton';
import Resume from './subComponents/Resume';
import WorkDisplay from './components/WorkDisplay';

function App() {
  return (
    <div>
     <Link to='/'><SvgComponent /></Link>
     <Resume />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path="/work" element={<WorkDisplay />}/>
        <Route path="/contact" element={<Contact/>}/>
 
      </Routes>

    </div>
  );
}

export default App;
