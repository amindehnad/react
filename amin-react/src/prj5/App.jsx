import Card from "./components/Card";
import { useState } from "react";
export default function App(){
    const [players ,setplayers]=useState([])
    const playersel=players.map( (item ,index)=>{
        return  <h1 key={index}> {item} </h1>
    })
    function SunmitHandler(event){
event.preventDefault()

setplayers(pervitem=>{
    return(
        [...pervitem , "amin"]
    )
})
    }
    return(
        <>
       <form onSubmit={SunmitHandler}>
<input type="text" name="" id="" />
<button>submit</button>
       </form>
       {playersel}
        </>
    )
}