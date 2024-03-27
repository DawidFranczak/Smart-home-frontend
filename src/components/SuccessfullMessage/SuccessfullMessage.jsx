import styles from "./SuccessfullMessage.module.css"

const SuccessfullMessage = ({message}) => {

    return(
        <p className={styles.successfullMessage}>{message}</p>
    )
};

export default SuccessfullMessage;