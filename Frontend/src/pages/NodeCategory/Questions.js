import React from 'react'

export default function Questions() {

    const[data, setData] = useState([]);
    const currentIndex = useSelector(store => store.nodeCurrentQues.currentQuestion)
    console.log("currentIndex" , currentIndex)

    useEffect(() => {
        getData();
    },[])
    const getData = async() =>{
        fetch("http://localhost:8080/quiz").then((d) => d.json()).then((data) =>{
            setData(data);
        })
    }
const jsArray = [];
// if( data.length !)
for( let i = 0; i < data.length; i++){
    if( data[i].category === "nodejs"){
        jsArray.push(data[i])
    }
}
  return (
    <div>
      
    </div>
  )
}
