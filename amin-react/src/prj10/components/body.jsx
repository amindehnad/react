import { useState } from "react"

export default function Body(){
    const [Meme , Setmeme]=useState({
        TopText :"amin",
        BottomText:"arash",
        ImageUrl :"http://i.imgflip.com/1bij.jpg"

    })
    function MemeHandler(event){
const {name , value} = event.currentTarget
Setmeme( (pervitem)=>({
    ...pervitem ,
    [name] : value
}))
    }
return(
    <>
    <div className="form">
        <div className="imput">
<label htmlFor="">TopText</label>
<input type="text" name="TopText" onChange={MemeHandler}/>
        </div>
        <div className="imput">
<label htmlFor="">BottomText</label>
<input type="text" name="BottomText" onChange={MemeHandler}/>
        </div>

    </div>
    <div className="meme">
        <img src={Meme.ImageUrl} alt="" />
        <span className="top"> {Meme.TopText} </span>
        <span className="bottom"> {Meme.BottomText} </span>
    </div>
    </>
)
}