import style from "./Button.module.css"

function Button(props){

    return(
        <button
        className={style.registartion}
        onClick={props.submit}>
            Rejestracja
        </button>
    );
}

export default Button