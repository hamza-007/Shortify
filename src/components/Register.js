import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Register() {
    return (
        <div>
            <div className='login_form'>
                <form method='POST' action="/register" >
                    <TextField label="Email" name="email" variant="filled" /><br/><br/>
                    <TextField 
                        label="Password" type="password" name="password" variant="filled" />
                        <br/><br/>
                    <Button type="submit" variant="outlined">Register</Button>
                </form>
            </div>
        </div>
    )
}