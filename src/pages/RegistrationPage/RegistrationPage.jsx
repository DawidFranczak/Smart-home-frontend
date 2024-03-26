import { useState } from "react";
import { useNavigate } from "react-router-dom";
import endpoints from "../../const/endpoints";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import BackArrow from "../../components/BackArrow/BackArrow";
import Button from "../../components/Button/Button";

import useFetchData from "../../hooks/useFetchData"; 
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
    const [formData, setFormData] = useState(null);
    const navigate = useNavigate();
    
    const URL = endpoints.registration;
    const OPTION = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }

    const {data, status, fetchData} = useFetchData();
    const ERRORDATA = status === 400 ? data : null
        
    const handleSubmit = async () => {
        await fetchData(URL,OPTION);
    }
    
    const handleData = (data)=>{
        setFormData(data)
        console.log(data)
    }
    if(status===201){
        setTimeout(()=>{
            navigate('/');
        },2000)
    }
       
    return(
        <div className={styles.container}>
            <BackArrow path="/"/>
            <h1 className={styles.heading}>Zarejestruj</h1>
            <RegistrationForm handleData = {handleData} errorData = {ERRORDATA} />
            <Button width={"50vw"} text="Rejestracja" submit = {handleSubmit}/>
            <p className={styles.successfullyMessage}>{status === 201 ? "Rejestracja przebiegła pomyślnie. Za chwilę zostaniesz przekierowany na stronę" : ""}</p>
        </div>
    );
}

export default RegistrationPage