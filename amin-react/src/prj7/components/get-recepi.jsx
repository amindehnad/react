export default function Getrecpie(props){
    const ingrdientsEl  = props.ingrdients.map(( item , index)=>{
        return(
            <li key={index}>
        {item} 
            </li>
        )
    })
    return(
    <>
        <div className="ingrdients-div">
            <ol>
                {ingrdientsEl}
            </ol>
        </div>
    
                {props.ingrdients.length >4 ? (

    <div className="get-recpie" ref={props.Recoisection}>
        <div className="left">
            <h3>

            </h3>
        </div>
            <div className="right" ref={props.Recoisection}>    
        <button className="h1 re-btn" onClick={props.Showrecpie}>
            get recpie
        </button>
            </div>
    </div>
                ):null}
    </>
    )
}
