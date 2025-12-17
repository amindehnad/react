import { useState } from "react"
import Getrecpie from "./get recpie"
import { useEffect } from "react"
import { useRef } from "react"
// import CookingAPI from "./get recpiefromApi"
import { GetrecpieFromapi } from "./get recpiefromApi"
import RecoisectionEl from "../../prj7/components/resepisection"
export default function Body(){
    const [ingrdients,setingrdients] = useState([])
    const [recpie,setRacpie]= useState()
function FormHandler(formdata){
    const newitem=formdata.get("ingrdients")
    setingrdients(
        pervingradient =>[... pervingradient,newitem]
    )
}
async function Showredpie(){
    const datarecpie = GetrecpieFromapi(ingrdients)
    setRacpie(datarecpie)
    setingrdients([])
}
const Recoisection=useRef(null)
useEffect( ()=>{
    if(recpie!==""&&Recoisection.current!==null){
        Recoisection.current.scrollIntoView({behavior:"smooth"})
    }
} , [recpie])
    return(<>
    <form action={FormHandler}>
        <input type="text" placeholder="مواد اولیه را وارد کنید" name="ingrdients" />
        <button className="bt-btn">ارسال</button>
    </form>
    {ingrdients.length>0 ?(
        <Getrecpie 
        ingrdients={ingrdients}
        Showredpie={Showredpie}
        Recoisection={Recoisection}
        />
       )
       :null}
   {recpie !==""?(
    <RecoisectionEl
    recpie={recpie}
    />
   )
:null
}
    </>)

}