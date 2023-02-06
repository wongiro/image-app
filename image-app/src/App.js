import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< SignIn />} />
          <Route path="/signup" element={< SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;