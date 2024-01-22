import React from 'react';
import './App.css';
import NavBar from './NavBar'
import SideBar from './SideBar';
import Main from './Main'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SideBar/>
      <Main/>
      <footer style={{padding: "15px"}}>
        <div style={{textAlign: "left"}}>
          <p>Casita</p>
        </div>
        <div className='centerFooter'>
          <p>&copy;</p>
        </div>
        <div>Rojito</div>
      </footer>
    </div>
  );
}

export default App;
