import Card from "./componennts/card"
import { useState } from "react"
export default function App(){
    const [counter ,setcounter ]= useState(0)
    function increaeHandler(){
        setcounter(counter +1)
    }
    function decreseeHandler(){
        if(counter>0){
            setcounter(counter -1)
            
        }else{
            alert("eror")
        }
    }
    return(
        <>
       <h1> {counter} </h1>
       <button onClick={increaeHandler}>اضافه کن</button>
       <button onClick={decreseeHandler}>کم کن</button>
       <Card name="amin" />
       <Card name="reza"/>
       <Card name="manochehr"/>
       <Card name="omid"/>
       <Card name="malk"/>
       <Card name="resler"/>
       <Card name="koper"/>
       </>
    )
}
