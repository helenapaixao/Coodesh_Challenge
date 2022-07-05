/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'



export const userDetails = () => {
  const { id } = useParams()
  

  useEffect(() => {
    console.log()
  }, [])


  
  return (
    <>
      <h1>{id}</h1>
      
  {/* <h1>{id.name}</h1> */}
    </>

    
  );
}


export default userDetails;