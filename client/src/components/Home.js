import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useFetch from "../Hooks/useFetch";

export default function Home() {
  const [urls, seturls] = useState([]);
  const [url, seturl] = useState("");
  const HandleCHange = (e) => seturl(e.target.value);
  const {data,error,isloading} = useFetch("/urls")
  useEffect(() => {
    seturls(data)
  }, [data])
  
  // useEffect(() => {
  //   async function fetchUrls() {
  //     await axios
  //       .get("/urls")
  //       .then((res) => {
  //         seturls(res.data);
  //       })
  //       .catch((err) => {
  //         return err;
  //       });
  //   }
  //   fetchUrls();
  // }, [urls]);

  return (
    <div className='home'>
      <form method='POST' className='home_form' action='/add/url'>
        <TextField
          label='Url'
          variant='outlined'
          placeholder='add a url here...'
          type='url'
          value={url}
          onChange={HandleCHange}
          className='url_input'
          name='full'
        />
        <Button
          className='btn'
          disabled={url === ""}
          type='submit'
          variant='outlined'
        >
          Shortify
        </Button>
      </form>
      <br />
      <br />

      {urls.length === 0 && isloading  ?  error != null ? (
        <h5>{error}</h5>
      ) : (
        <h5>You Haven't Any Url shortened... </h5>
      ) : (
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
              {urls &&
                urls.reverse().map((r, k) => (
                  <tr key={k}>
                    <td>
                      <a href={r.full}>{r.full}</a>
                    </td>
                    <td>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href={`${process.env.REACT_APP_HOMEPAGE}/click/${r.short}`}
                      >
                        {r.short}
                      </a>
                    </td>
                    <td className='click'>{r.clicks}</td>
                    <td className='del'>
                      <a
                        className='del'
                        href={`${process.env.REACT_APP_HOMEPAGE}/delete/${r._id}`}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </center>
      )}
    </div>
  );
}
