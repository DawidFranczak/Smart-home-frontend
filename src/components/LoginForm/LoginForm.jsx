import { useState, useEffect } from "react";
import FormField from "../FormField/FormField";
import iconPatch from "../../const/icons";
import styles from "./LoginForm.module.css"


const LoginForm = (props)=>{
    const { handleData } = props; 
    const [formData, setFormData] = useState({
        email: '',
        pin: '',
    });

    useEffect(()=>{
        handleData(formData)
    
        },[formData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return(
        <form className={styles.form}>
            <FormField
                iconPatch={iconPatch.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
            />
            <FormField
                iconPatch={iconPatch.password}
                onChange={handleChange}
                type="password"
                name="pin"
                placeholder="Podaj kod PIN"
                pattern="^[0-9]+$"
                inputMode="numeric"
            />
            {props.errorData?.message && <p className={styles.errorMessage}>{props.errorData.message}</p>}
        </form>
    );

}

export default LoginForm