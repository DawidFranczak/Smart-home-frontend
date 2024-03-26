import style from "./Button.module.css"

function Button({text, submit, width, className}){

    return(
        <button
        className={`${style.button} ${className}`}
        style={{ width:width}}
        onClick={submit}>
            {text}
        </button>
    );
}

export default Button