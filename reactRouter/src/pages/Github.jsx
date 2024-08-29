import React, { useEffect, useState } from 'react'

function Github() {
    /*const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/Anushka040604')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setData(data);
        });
    },[])*/
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt='gitPicture' width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const res=await fetch('https://api.github.com/users/Anushka040604')
    return res.json();

}