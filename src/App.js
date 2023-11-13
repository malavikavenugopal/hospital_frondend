
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';

import Department from './components/pages/Department';
import Patients from './components/pages/Patients';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      
      <Header/>
<Routes>
  <Route path={'/'}  element= {<Home/>}/>

   <Route path={'/department'}  element= {<Department/>}/>
   <Route path={'/patients'}  element= {<Patients/>}/>
</Routes>
    <Footer/>
   
    </div>
  );
}

export default App;
