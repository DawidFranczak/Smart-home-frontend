import styles from "./AddingDeviceSelect.module.css"

const AddingDeviceSelect = ({name, selected, value}) => {

    const select = (event) =>{
        selected(event)
    }

    return(
        <div className={styles.container}>
            <input id={name} type='radio' name="device" value={value} className={styles.input} onClick={select}/>
            <label htmlFor={name}>{name}</label>
        </div>
    );
};

export default AddingDeviceSelect;