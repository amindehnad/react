import Logo from "../static/pick/icons8-setting-50.png"
import Direction from "../static/pick/icons8-paper-plane-50.png"
import { useRef } from "react"
export default function Header(Props){
    const SettingModel = useRef(null)
     function editHandler(formdata){
        const UserName = formdata.get("UserName")
        const ProfileImg=formdata.get("ProfileImg")
        const location=formdata.get("location")
        const PostImg=formdata.get("PostImg")
        const likecount=formdata.get("likecount")
        const capition = formdata.get("capition")
        const sendcount=formdata.get("sendcount")
        const ComentCount=formdata.get("ComentCount")
        Props.setpost(pervitem=>({
        ...pervitem ,
        UserName:UserName,
        ProfileImg:ProfileImg,
        location:location,
        PostImg:PostImg,
        likecount:likecount,
        capition:capition,
        sendcount:sendcount,
        ComentCount:ComentCount
        }))
        SettingModel.current.classList.remove("Active")
     }
     function OpensetingHandler(){
        SettingModel.current.classList.add("Active")
        console.log("click")
     }
     function ClosesetingHandler(){
        SettingModel.current.classList.remove("Active")
     }
    return(
        <>
        <header>
            <div>
                <button onClick={OpensetingHandler}> 
                    <img src={Logo} alt="" />
                </button>
             </div>
            <div>
                <h1>
                    instagram
                </h1>
            </div>
            <div>
                <button>
                     <img src={Direction} alt="" />
                </button>
            </div>
         </header>
         <div id="settingmodal" ref={SettingModel}>
            <button onClick={ClosesetingHandler} id="closebtn">x</button>
                <form action={editHandler}>
                <div>
                        <label htmlFor="">UserName</label>
                        <input type="text" name="UserName" defaultValue={Props.post.UserName} />
                </div>
                <div>   
                        <label htmlFor="">profile Img</label>
                        <input type="text" name=" ProfileImg" defaultValue={Props.post.ProfileImg}/>
                </div>
                <div>   
                        <label htmlFor="">location</label>
                        <input type="text" name="location" defaultValue={Props.post.location}/>
                </div>
                <div>
                        <label htmlFor="">PostImg</label>
                        <input type="text" name="PostImg"  defaultValue={Props.post.PostImg}/>
                </div>
                <div>
                        <label htmlFor="">capition</label>
                        <input type="text" name="capition"  defaultValue={Props.post.capition}/>
                </div>
                <div>
                        <label htmlFor="">likecount</label>
                        <input type="number" name="likecount" defaultValue={Props.post.likecount}/>
                </div>
                <div>   
                        <label htmlFor="">sendcount</label>
                        <input type="number" name="sendcount" defaultValue={Props.post.sendcount}/>
                </div>

                <div>   
                        <label htmlFor=""> ComentCount</label>
                        <input type="number" name="ComentCount"defaultValue={Props.post.ComentCount}/>
                </div>
                        <button type="submit">save</button>
                </form>
            </div>
        </>
    )
}