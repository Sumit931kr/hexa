import react from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// import Listingpage from './component/Listingpage';
// import Landingpage from './component/Landingpage';
import Home from './Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* <Route path='/' element={<Landingpage />} />
            <Route path='/listing' element={<Listingpage />} /> */}
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
