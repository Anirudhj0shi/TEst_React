import { useEffect, useState } from 'preact/hooks'
import React from 'react'


const Fetach = () => {
    const [api, setapi] = useState([])
    useEffect(() => {

        const fetchdata =  async ()=>{
            const api = await fetch('https://jsonplaceholder.typicode.com/todos/');
            const data =await api.json()
            console.log(data)
            setapi(data)
        }

        fetchdata()

     }, [])
    

     console.log("data in state",api);

  return (
      <>
      <br/>
      <h1>Fetching Data from API</h1><br/>
        {api.map((data)=>{
            return(
                <>
                    <div className="container">
                    <br/>
                    {/* <h1 className='text-center'>id:{data.userID}</h1><br/> */}
                    <h3>data:- {data.title}</h3>
                    
                    </div>
                </>
            )
        })}   
    </>
  )
}

export default Fetach
