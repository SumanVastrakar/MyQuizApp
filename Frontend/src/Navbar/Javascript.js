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
    console.log(JSON.parse("{foo : hello}"));

    // const originalData = JSON.parse(data[0]);
    // console.log(originalData)

    // console.log(data)
  return (
    <div>
    {/* {
        data.map((e) => (
            <h1 style={{margin:"50px"}}>{e}</h1>
        ))
    } */}
    </div>
  )
}
