import React, { useEffect, useState } from 'react'

export default function Javascript() {
    const [data, setData] = useState([])
    useEffect(() => {
        getData();
    },[])
    const getData = async() =>{
        fetch("http://localhost:8080/quiz").then((d) => d.json()).then((data) =>{
            setData(data);
        })
    }

    console.log(data)
  return (
    <div>
        {
            data.map((e) => (
                <h1>{e.ques}</h1>
            ))
        }
      
    </div>
  )
}
