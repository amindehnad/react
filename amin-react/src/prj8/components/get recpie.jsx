export default function Getrecpie(props){
    const ingrdientsEl = props.ingrdients.map(( item,index)=>{
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
    <div className="get-recpie">
            <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, est! Dolor
                           eveniet deleniti quae laudantium! Magnam quos deserunt ad magni impedit nemo
                     minima error labore, ullam architecto tempore, odio tempora!
                </h3>
            </div>
            <div className="right">    
            <button className="h1 re-btn">دستور غذا را دریافت کنید </button>
            </div>
    </div>
                    ):null}
         </>
        )
    }