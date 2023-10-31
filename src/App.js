
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'

function App() {
  return (
    <div >
      <Navbar/>
     
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/about' element={<About/>} exact/>
          <Route path='/service' element={<Service/>}/>
          <Route  path='/contact' element={<Contact/>}/>
        </Routes>
     
      
    </div>
  );
}

export default App;
