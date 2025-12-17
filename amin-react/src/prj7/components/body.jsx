import Getrecpie from "./get-recepi"
import { useEffect } from "react"
import { useRef } from "react"
import { GetrecpieFromapi } from "./get recpiefromApi"
import { useState } from "react"
import RecoisectionEl from "./resepisection"
 export default function Body(){
    const [ingrdients,setingrdients]= useState([])
    const [recpie,setRacpie]= useState("")
    
    function FormHandler(formData){
        const newitem= formData.get("ingrdients")
        setingrdients(
            pervingradient=>[...pervingradient , newitem]

        )
    }
    async function Showrecpie (){
        const datarecpie =GetrecpieFromapi(ingrdients)
        setRacpie(datarecpie)
        setingrdients([])

    }
    const Recoisection =useRef(null)
    useEffect(  ()=>{
        if(recpie!=="" &&Recoisection.current!==null ){
            Recoisection.current.scrollIntoView({behavior : "smooth"})
        }
    } , [recpie]  )

    return(
        <>
        <form action={FormHandler}>
            <input type="text" placeholder="e.g meet"  name="ingrdients" id="" />
            <button className="bt-btn">submit</button>
        </form>
       {ingrdients.length>0 ?(
        <Getrecpie 
        ingrdients={ingrdients}
        Showrecpie={Showrecpie}
        Recoisection={Recoisection}
        />
       )
       :null}
       {recpie !== '' ?(
            <RecoisectionEl
            recpie={recpie}
            />
            )
        :null
        }
        </>

)}