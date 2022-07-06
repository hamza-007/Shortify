import axios from "axios";
import { useEffect,useState } from "react";



function useFetch(url){
    const [data, setdata] = useState([])
    const [error, seterror] = useState(null)
    const [isloading, setisloading] = useState(false)
    
    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source();

        const fetchData = async (url) =>{
            setisloading(true)
            try{
                const response = await axios.get(url,{
                    cancelToken : source.token
                });
                if(isMounted){
                    setdata(response.data)
                    seterror(null)
                }
            }catch(err){
                if(isMounted){
                    seterror(err.message)
                    setdata([])
                }
            }finally{
                isMounted && setTimeout(()=> setisloading(false),2000)
            }
            fetchData(url)
        } 
     return {data,error,isloading}
    }, [url])
    
}


export default useFetch;