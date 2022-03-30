import React from 'react'
import {useState,useEffect} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Home() {
    const [state, setstate] = useState([]);
    const [test, settest] = useState('');
    const [user, setuser] = useState('');
    const [log, setlog] = useState(null);
    //axios.defaults.withCredentials = true;
    useEffect(() => {
     async function getdata(){
       await axios.get("/account").then(res =>{

       }).catch(err=>{
         console
       })
     }
    }, [])
    
      
    return (
        <div className='home'>
          
          
            <form method='POST' className='home_form'  action="/add">
          <TextField label="Url" variant="outlined" placeholder='add a url here...'
          type="url"
          value={test} 
          onChange={
            (e)=> settest(e.target.value)
          } className='url_input' name="full" 
          />   
          
          <Button className='btn' disabled={test===""} type="submit" variant="outlined">Shortify</Button>
      </form><br/><br/>

      {
        
        state.length === 0 ?<h5>You Haven't Any Url shortened... </h5>:
        <center>
            <table className='url_list'>
                <thead>
                  <tr>
                    <th>Full Url</th>
                    <th>Short Url</th>
                    <th>Clicks</th>
                  </tr>
                </thead>
                <tbody>
                      {
                        state.reverse().map((r,k)=>(
                            <tr key={k}>
                            <td><a href={r.full}>{r.full}</a></td>
                            <td><a href={`http://localhost:4000/r/${r.short}`}>{r.short}</a></td>
                            <td className='click'>{r.click}</td> 
                            <td className='del'><a className='del' href={`http://localhost:4000/delete/${r.id}`}>Delete</a></td>
                            </tr>
                        ))
                      }
                  </tbody>
            </table>
        </center>
      }
      
        </div>
    )
}
