import { useState, useEffect } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Button from "../../components/Button/Button";
import useFetchData from "../../hooks/useFetchData"; 
import styles from "./RegistrationPage.module.css"

const RegistrationPage = () => {
    const [formData, setFormData] = useState(null);

    const URL = 'http://localhost:8080/api/account/registration/';
    const OPTION = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }

    const {data, status, fetchData} = useFetchData(URL,OPTION);
    const ERRORDATA = status === 400 ? data : null
        
    const handleSubmit = async () => {
        await fetchData();
    }
    
    const handleData = (data)=>{
        setFormData(data)
    }
       
    return(
        <div className={styles.container}>
            <RegistrationForm handleData = {handleData} errorData = {ERRORDATA} />
            <Button submit = {handleSubmit}/>
            <p className={styles.successfullyMessage}>{status === 201 ? "Rejestracja przebiegła pomyślnie.":""}</p>
        </div>
    );
}

export default RegistrationPage