import { useState, useEffect } from 'react';

const useFetch = (url)=>{
    const [data, setData ] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error,setError] = useState(null);  

    useEffect(()=>{
        const abportCont = new AbortController();
        setTimeout(()=>{
          fetch(url,{ signal: abportCont.signal})
          .then(res => {
             if(!res.ok){
                throw Error('could not fetch the data for that resource');
             } 
             return res.json();
          })
          .then((data)=>{
              setData(data);
              setIsPending(false);
              setError(null);
          },2000)
          .catch(err => {
            if(err.name === 'AbortError'){
              console.log('fetched aborted');
            } else {
            setIsPending(false);
            setError(err.message);
            }
          })
        })

        return () => abportCont.abort();
      },[url]);

    return {data, isPending, error};  
}

export default useFetch ;