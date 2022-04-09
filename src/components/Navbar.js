import React, { useState,useEffect } from 'react'
import {AppBar,Toolbar,Typography} from '@mui/material';
import axios from "axios"
export default function Navbar() {
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
        <div className='navbar'>
             <AppBar position="sticky" className="appbar">
                 
                  <Toolbar className="tool">
                        <div>
                            <a href="/">
                                <Typography className="typ" variant="h5">
                                    Shortify
                                </Typography>
                            </a>
                        </div>
                        
                             <div className='login_stat'>
                                 {  user ? <a href="http://localhost:5000/logout">log out</a> : 
                                 
                                <>
                                <a href="/login">Login</a>
                                <a href="/sign_up">SignUp</a>
                                </>}
 
                                 
                                    

                            </div>
                            
                            
                        
                  </Toolbar>
              </AppBar>
        </div>
    )
}