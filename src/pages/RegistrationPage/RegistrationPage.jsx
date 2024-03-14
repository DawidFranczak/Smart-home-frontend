import { useState, useEffect } from "react";

import endpoints from "../../const/endpoints";
import icons from "../../const/icons"
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Button from "../../components/Button/Button";

import useFetchData from "../../hooks/useFetchData"; 

import styles from "./RegistrationPage.module.css"
import { Link } from "react-router-dom";

const RegistrationPage = () => {
    const [formData, setFormData] = useState(null);

    const URL = endpoints.registration;
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
        console.log(data)
    }
    if(status===201){
        setTimeout(()=>{
            window.location.replace(window.location.origin);
        },2000)
    }
       
    return(
        <div className={styles.container}>
            <Link className={styles.iconBack} to="/">
                <svg viewBox="0 0 30 30">
                    <path d={icons.backArrow} fill="#FFFFFF"></path>
                </svg>
            </Link>
            <h1 className={styles.heading}>Zarejestruj</h1>
            <RegistrationForm handleData = {handleData} errorData = {ERRORDATA} />
            <Button width={"50vw"} text="Rejestracja" submit = {handleSubmit}/>
            <p className={styles.successfullyMessage}>{status === 201 ? "Rejestracja przebiegła pomyślnie. Za chwilę zostaniesz przekierowany na stronę" : ""}</p>
        </div>
    );
}

export default RegistrationPage