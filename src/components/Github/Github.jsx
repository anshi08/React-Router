import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData();

//     const [data, setData] = useState([])

    
//     useEffect(()=> {
//         const githubInfo = async () => {
//         const res = await fetch(`https://api.github.com/users/hiteshchoudhary`)
//         const response = await res.json();
//         setData(response)
//         // console.log(response)
//         // return response ;
//     }
//     githubInfo();
// },[])


  return (
    <div className='bg-gray-600 
    text-white text-3xl p-4 
    text-center'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt='Image' />
    </div>
    
  )
}

export default Github

export const githubInfo = async () => {
    const res = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    const response = await res.json();
    // console.log(response);
    return response ;
}