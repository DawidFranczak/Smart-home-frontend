import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import endpoints from "../../const/endpoints";
import useFetchData from "../../hooks/useFetchData"
import LoginForm from "../../components/LoginForm/LoginForm";
import Button from "../../components/Button/Button"
import styles from "./LoginPage.module.css"

import { Link } from "react-router-dom";

const LoginPage = () =>{
    const [formData, setFormData] = useState(null);
    const [errorData, setErrorData] = useState(null);
    const { setAuthToken } = useAuth(false);

    const navigate = useNavigate();

    const URL = endpoints.login;
    const OPTION = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    const {data, status, fetchData} = useFetchData();
   
    useEffect(()=>{
        switch(status){
            case 200:
                setAuthToken(data.token)
                navigate('/home');
                break;
    
            case 400:
                setErrorData(data);
                break;
        }
    },[data])

    const handleSubmit = async () => {
        await fetchData(URL,OPTION);
    }

    const handleData = (data) => {
        setFormData(data)
    };

    return(
        <div className={styles.container}>
            <p className={styles.heading}>
                Logowanie
            </p>
            <LoginForm handleData = {handleData} errorData = {errorData}/>
            <div className={styles.buttonContainer}>
                <Button submit={handleSubmit} width={"50%"} text="Zaloguj"/>
                <Link style={{ width: '50%' }} className={styles.button} to="registration/">Rejestracja</Link>
            </div>
            <Link className={styles.button} >Zapomniałeś hasła?</Link>
        </div>
    );
}

export default LoginPage