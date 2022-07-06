import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { Routes, Route, Link} from "react-router-dom"
import Tareas from './components/Tareas';
import Clima from './components/Clima';
import Landing from './components/Landing';
import Pagina404 from './components/Pagina404';
import Navigation from './components/Navigation'
import React, {useState} from 'react';
function App (){
  const [token, setToken] = useState();

  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <>
    <Navigation />

    <Routes/>

    <Routes>
      <Route index element={<Landing/>}/>
      <Route path='' element={<Landing/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='tareas' element={<Tareas/>}/>
      <Route path='clima' element={<Clima/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='*' element={<Pagina404/>}/>
    </Routes>
    </>
  );
};

export default App;
