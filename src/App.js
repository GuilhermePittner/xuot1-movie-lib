import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>

      {/* 
          this outlet tag basically "tells" which 
          route should be renderized, acording to the
          routes we created on 'index.js' file 
      */}
      <Outlet/>
    </div>
  );
}

export default App;
