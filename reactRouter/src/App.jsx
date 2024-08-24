import { useState } from 'react';
//import './App.css';
import Header from './components/Header/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter, Route,Routes} from 'react-router-dom'; 
import User from './pages/User';
import Github, { githubInfoLoader } from './pages/Github';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path='user/:id' element={<User/>}/>
          <Route 
          loader={githubInfoLoader}
          path='github' element={<Github/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
