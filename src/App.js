// import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {

  return(
    <HashRouter> 
      <Layout />
    </HashRouter>
  );  
};

export default App;