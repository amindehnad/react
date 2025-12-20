import Body from "./components/body"
import Header from "./components/header"
import { useState } from "react"
import "./static/style.css"
export default function App(){
    const [post , setpost] = useState(
        {
            UserName:"",
            location:"",
            ProfileImg:"",
            likecount:350,
            sendcount:20,
            isSend:false,
            ComentCount:30,
            islile:false,
            sharecount:"",
            issaave:false,
            PostImg:"",
            capition:""
    
        }
    )
    

    return(
        <>
        <Header 
        post={post}
        setpost={setpost}
        />
        <Body 
        post={post}
        setpost={setpost}
        />
        </>
    )
}