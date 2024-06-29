import React, { useEffect } from 'react'

const AutoFetch = (callback,interval) => {

 useEffect(()=>{
console.log("called");

    const callInterval = setInterval(callback,interval);
    return()=>clearInterval(callInterval);
 },[callback,interval])

}

export default AutoFetch