import styles from "./FormField.module.css"

const FormField = (props) => {
    const {iconPatch, onChange, type, name, placeholder,pattern, inputMode, viewBox = "0 0 16 16"} = props;
    const regex = new RegExp(pattern)
    
    const handleChange = (event) =>{
        const inputValue = event.target.value;

        if(regex.test(inputValue)){
            onChange(event)
            return
        }
        event.target.value = inputValue.slice(0,-1)
    };
    
    return(
        <div className={styles.field}>
            <svg className={styles.inputIcon} width="16" height="16" fill="currentColor" viewBox={viewBox}>
                <path d={iconPatch}></path>
            </svg>
            <input 
                onChange={(event) => handleChange(event)}
                placeholder={placeholder}
                className={styles.inputField}
                type={type}
                name={name}
                inputMode={inputMode}
            />
        </div>
    );
};

export default FormField
