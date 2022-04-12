import React from 'react'
import {useState,useEffect} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Home() {
    const [urls, seturls] = useState([]);
    const [url, seturl] = useState('');
    useEffect(() => {
     async function getdata(){
        await axios.get("http://localhost:5000/urls").then(res=>{
            seturls(res.data);
            console.log(res.data);
        }).catch(err=>{
          console.log("error getting urls")
        })
     }
     getdata();
    }, [urls])
    
      
    return (
        <div className='home'>
            <form method='POST' className='home_form'  action="http://localhost:5000/add/url">
                  <TextField 
                      label="Url"
                      variant="outlined"
                      placeholder='add a url here...'
                      type="url"
                      value={url} 
                      onChange={
                        (e)=> seturl(e.target.value)
                      } 
                      className='url_input'
                      name="full" 
                  />   
                  <Button className='btn' disabled={url===""} type="submit" variant="outlined">Shortify</Button>
          </form><br/><br/>

      {
        
        urls.length === 0 ?<h5>You Haven't Any Url shortened... </h5>:
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
                        urls.reverse().map((r,k)=>(
                            <tr key={k}>
                            <td><a href={r.full}>{r.full}</a></td>
                            <td><a href={`http://localhost:5000/r/${r.short}`}>{r.short}</a></td>
                            <td className='click'>{r.click}</td> 
                            <td className='del'><a className='del' href={`http://localhost:5000/delete/${r.id}`}>Delete</a></td>
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
