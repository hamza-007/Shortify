import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
            <Routes>
              <Route  path="/" element={<Login />} />
              <Route  path="/sign_up" element={<Register />} />
              <Route path="/account" element={<Home />} />
            </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
