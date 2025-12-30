export default function Pad(props){
    const IsActive = props.Active ? "Active" : "" ;
return(
    <>
    <button onClick={ ()=>props.FlipActiveHandler(props.id)}
    className={`pad ${IsActive}`} 
     style={ {backgroundColor : `#${props.color}`  } }
     >
    </button>
    </>
)
}