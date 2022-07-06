import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Cookies from "js-cookie";

export default function Navbar() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    async function fetchCookies() {
      const user = Cookies.get(process.env.REACT_APP_COOKIE);
      setuser(user);
    }
    fetchCookies();
  }, [user]);
  return (
    <div className='navbar'>
      <AppBar position='sticky' className='appbar'>
        <Toolbar className='tool'>
          <div>
            <a href='/'>
              <Typography className='typ' variant='h5'>
                Shortify
              </Typography>
            </a>
          </div>

          <div className='login_stat'>
            {user ? (
              <a href={`${process.env.REACT_APP_HOMEPAGE}/logout`}>log out</a>
            ) : (
              <>
                <a href='/login'>Login</a>
                <a href='/sign_up'>SignUp</a>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
