import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Reset from "./pages/Reset";
import Home from "./pages/Home";
import { useState } from 'react'

import './App.css';

function App() {
  const [ isAuth, setIsAuth ] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< SignIn setIsAuth={ setIsAuth }/>} />
          <Route path="/signup" element={< SignUp />} />
          <Route path="/reset" element={<Reset />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
