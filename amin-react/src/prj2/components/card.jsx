export default function Card(props){
    return(
<>
<article className="jornal-card">
    <div className="top">
<img src={props.img.src} alt="" />
    </div>
    <div className="body">
<h3> {props.location} </h3>
<h1> {props.title} </h1>
<h3>
    {props.description}
</h3>
    </div>
</article>
</>
    )
}