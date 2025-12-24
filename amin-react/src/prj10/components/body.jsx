import { useEffect, useState } from "react"
export default function Body(){
    const [AllMeme , SetAllMeme]=useState([])
    const [Meme , Setmeme]=useState({
        TopText :"",
        BottomText:"",
        ImageUrl :"http://i.imgflip.com/1bij.jpg"

    }
)
    function MemeHandler(event){
        const {name , value} = event.currentTarget
            Setmeme( (pervitem)=>({
            ...pervitem ,
            [name] : value
            }
        )
    )
}
    useEffect( ()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(   res => res.json() ) 
        .then( data => SetAllMeme(data["data"]["memes"]))
    } , [] )

    function NextImgHandler(){
    let randomNumber = Math.floor(   Math.random() * AllMeme.length )
    let NewImgAdress=AllMeme[randomNumber]["url"]
    Setmeme( (pervitem)=>({
        ...pervitem ,
        ImageUrl : NewImgAdress
    } ) )

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
    <button onClick={NextImgHandler}> next image</button>

    <div className="meme">
                <img src={Meme.ImageUrl} alt="" />
                <span className="top"> {Meme.TopText} </span>
                <span className="bottom"> {Meme.BottomText} </span>
    </div>
</>
    )
}