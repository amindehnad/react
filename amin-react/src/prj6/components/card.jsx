export default function Card(props){
    return(
        <>
        <article className="jornal-card">
    <div className="top">
        <img src={props.img.src} alt="" />
    </div>
    <div className="body">
<h1>name : {props.name} </h1>
<h2> {props.from} </h2>
<h3> {props.age} </h3>
<h4> {props.postgame} </h4>
<h4> {props.shirtnumber} </h4>
    </div>
</article>
    </>
    )
}

    
    