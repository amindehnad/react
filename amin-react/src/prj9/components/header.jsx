import Logo from "../static/pick/icons8-setting-50.png"
import Direction from "../static/pick/icons8-paper-plane-50.png"
import { useRef } from "react"
export default function Header(Props){
    const SettingModel = useRef(null)
    return(
        <>
        <header>
            <div>
                <button> 
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
            <button id="closebtn">x</button>
<form action="">
<div>
        <label htmlFor="">UserName</label>
        <input type="text" name="UserName" />
</div>
<div>   
        <label htmlFor="">profile Img</label>
        <input type="text" name=" ProfileImg" />
</div>
<div>   
        <label htmlFor="">location</label>
        <input type="text" name="location"/>
</div>
<div>
        <label htmlFor="">PostImg</label>
        <input type="text" name="PostImg" />
</div>
<div>
        <label htmlFor="">capition</label>
        <input type="text" name="capition" />
</div>
<div>
        <label htmlFor="">likecount</label>
        <input type="number" name="likecount"/>
</div>
<div>   
        <label htmlFor="">sendcount</label>
        <input type="number" name="sendcount" />
</div>

<div>   
        <label htmlFor="">sharecount</label>
        <input type="number" name="sharecount"/>
</div>
            <button type="submit">save</button>
    </form>
            </div>
        </>
    )
}