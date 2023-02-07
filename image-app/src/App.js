import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Reset from "./pages/Reset";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< SignIn />} />
          <Route path="/signup" element={< SignUp />} />
          <Route path="/reset" element={<Reset />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
