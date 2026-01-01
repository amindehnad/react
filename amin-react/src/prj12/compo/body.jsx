import "../static/style.css"
export default function Body(props) {
    return (
        <div
            className={`die ${props.isHeld ? "held" : ""}`}
            onClick={props.holdHandler}
        >
            {props.value}
        </div>
    );
}
