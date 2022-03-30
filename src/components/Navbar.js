import React, { useState,useEffect } from 'react'
import {AppBar,Toolbar,Typography} from '@mui/material';
import axios from "axios"
export default function Navbar() {
    const [loginstatus, setloginstatus] = useState(null);
    useEffect(()=>{
       
    },[])
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
                                <a href="/">
                                    Login
                                </a>
                                <a href="/sign_up">
                                    Register
                                </a>
                            </div>
                            
                            
                        
                  </Toolbar>
              </AppBar>
        </div>
    )
}