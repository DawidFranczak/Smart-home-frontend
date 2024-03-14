import style from "./Button.module.css"

function Button(props){

    return(
        <button
        className={style.button}
        style={{ width:props.width}}
        onClick={props.submit}>
            {props.text}
        </button>
    );
}

export default Button