import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
    return (
       <div className='login'>
            <div className='login_form'>
                <form method='POST' action='http://localhost:5000/login' >
                    <TextField label="Email" type="email" name="email" variant="filled" required/><br/><br/>
                    <TextField 
                        label="Password" type="password" name="password" variant="filled" required/>
                        <br/><br/>
                    <Button type="submit" variant="outlined">Login</Button>
                </form>
            </div>
        </div>
    )
}