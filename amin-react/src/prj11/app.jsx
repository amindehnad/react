import { useState } from "react"
import Pad from "./components/pad"
export default function App(){
    const [pade,setpade]=useState([
        {
            id:1,
            color:"A626d3",
            Active:true
        },
        {
            id:2,
            color:"C0392B",
            Active:false


        },
        {
            id:3,
            color:"E67E22",
            Active:false


        },
        {
            id:4,
            color:"F1C40F",
            Active:false


        },
        {
            id:5,
            color:"27AE60",
            Active:false


        },
        {
            id:6,
            color:"1ABC9C",
            Active:false


        },
        {
            id:7,
            color:"2980B9",
            Active:true


        },
        {
            id:8,
            color:"7F8C8D",
            Active:true
        }
    ])
    function FlipActiveHandler(id){
        setpade( pervpad=>pervpad.map( item=>
            item.id === id ? { ...item , Active : !item.Active}  : item
         ) )
    }
    const PadEl =pade.map( (item)=>{
        return(
            <Pad  
            id={item.id}
            color={item.color}
            Active={item.Active}
            FlipActiveHandler={FlipActiveHandler}
            />
        )
    })
    return(
        <>
        <div className="conteiner">
            {PadEl}
        </div>
        </>
    )
}