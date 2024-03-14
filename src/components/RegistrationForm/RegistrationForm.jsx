import { useState, useEffect } from 'react';

import styles from "./RegistrationForm.module.css"
import iconPatch from "../../const/icons"
import FormField from "../FormField/FormField"

const  RegistrationForm = (props) => {

    const { handleData } = props; 
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        pin: '',
    });

    useEffect(()=>{
        handleData(formData)

    },[formData, handleData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return(
        <>
            <div className= {styles.container} >
                <form className= {styles.form}>
                    <FormField
                        iconPatch={iconPatch.user}
                        onChange={handleChange}
                        type="text"
                        name="firstName"
                        placeholder="Imię"
                        pattern="^[A-Za-z]+$"
                        viewBox="0 0 35 35"
                    />
                    <FormField
                        iconPatch={iconPatch.user}
                        onChange={handleChange}
                        type="text"
                        name="lastName"
                        placeholder="Nazwisko"
                        pattern="^[A-Za-z]+$"
                        viewBox="0 0 35 35"
                    />
                    <FormField
                        iconPatch={iconPatch.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    {props.errorData?.email && <p className={styles.errorMessage}>{props.errorData.email}</p>}
                    <FormField
                        iconPatch={iconPatch.password}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="Hasło"
                    />
                    {props.errorData?.password && <p className={styles.errorMessage}>{props.errorData.password}</p>}
                    <FormField
                        iconPatch={iconPatch.password}
                        onChange={handleChange}
                        type="password"
                        name="password2"
                        placeholder="Powtórz hasło"
                    />
                    {props.errorData?.password2 && <p className={styles.errorMessage}>{props.errorData.password2}</p>}
                    <FormField
                        iconPatch={iconPatch.password}
                        onChange={handleChange}
                        type="password"
                        name="pin"
                        placeholder="Podaj kod PIN"
                        pattern="^[0-9]+$"
                        inputMode="numeric"
                    />
                    {props.errorData?.pin && <p className={styles.errorMessage}>{props.errorData.pin}</p>} 
                </form>
            </div>
        </>
    );
}

export default RegistrationForm