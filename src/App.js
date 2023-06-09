

import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Hero from './Components/Home-Page/Hero';
import Categories from './Components/Law-Category/Categories';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
          
            <Router>
       <Routes> 
            <Route path="/" element={  <Hero /> } /> 
            <Route path="/cat" element={  <Categories /> } />
            <Route path="/register" element={  <Register /> } />
            <Route path="/login" element={ <Login />} /> 
       </Routes> 
       </Router>
  
    </div>
  );
}

export default App;
