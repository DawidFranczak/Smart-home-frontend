import { useState } from "react";

import endpoints from "../../const/endpoints";
import useFetchData from "../../hooks/useFetchData"
import LoginForm from "../../components/LoginForm/LoginForm";
import Button from "../../components/Button/Button"
import styles from "./LoginPage.module.css"

import { Link } from "react-router-dom";

const LoginPage = () =>{
    const [formData, setFormData] = useState(null);

    const URL = endpoints.login;
    const OPTION = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }

    const {data, status, fetchData} = useFetchData(URL,OPTION);
    const ERRORDATA = status === 400 ? data : null

    console.log(data)

    const handleSubmit = async () => {
        await fetchData();
        console.log(formData)
    }

    const handleData = (data) => {
        setFormData(data)
        console.log(formData)
    };

    return(
        <div className={styles.container}>
            <p className={styles.heading}>
                Logowanie
            </p>
            <LoginForm handleData = {handleData} errorData = {ERRORDATA}/>
            <div className={styles.buttonContainer}>
                <Button submit={handleSubmit} width={"50%"} text="Zaloguj"/>
                <Link style={{ width: '50%' }} className={styles.button} to="registration/">Rejestracja</Link>
            </div>
            <Link className={styles.button} >Zapomniałeś hasła?</Link>
        </div>
    );
}

export default LoginPage