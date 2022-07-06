import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Cookies from "js-cookie";
import Notfound from "./components/Notfound";
import { useEffect, useState } from "react";

function App() {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const user = Cookies.get(process.env.REACT_APP_COOKIE);
    setuser(user);
  }, [user]);

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Home /> : <Login />} />
          <Route path='/sign_up' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/notfound' element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
