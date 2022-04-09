import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';
import axios from "axios";
import {useEffect,useState} from 'react'
function App() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    async function getdata(){
      await axios.get("/checkuser").then(res=>{
          setuser(res.data)
      })
    }
  getdata()
    
  }, [])
  
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
            <Routes>
              <Route  path="/" element={user ? <Home /> : <Login />} />
              <Route  path="/sign_up" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
