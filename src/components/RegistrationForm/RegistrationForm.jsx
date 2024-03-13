import { useState, useEffect } from 'react';

import styles from "./RegistrationForm.module.css"

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

    const handlePin = (event) => {
        const currentPole = event.target;
        const previousPole = currentPole.previousElementSibling;
        const nextPole = currentPole.nextElementSibling;
        const value = currentPole.value;
        
        if(value === "" ){
            if(previousPole) previousPole.focus()
            setFormData({ ...formData, pin: value });
            return
        }

        setFormData({ ...formData, pin: formData.pin + value });
        
        if(nextPole) {
            nextPole.value=null            
            nextPole.focus();
        }
        currentPole.blur();
    }

    return(
        <>
            <div className= {styles.container} >
                <h1>Rejestracja</h1>
                <form className= {styles.form}>
                    <input className={styles.input}
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='Imię'
                    />
                    <input className={styles.input}
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder='Nazwisko'
                    />
                    <input className={styles.input}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                    {props.errorData?.email && <p className={styles.errorMessage}>{props.errorData.email}</p>}
                    <input className={styles.input}
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Hasło'
                    />
                    {props.errorData?.password && <p className={styles.errorMessage}>{props.errorData.password}</p>}
                    <input className={styles.input}
                        type="password"
                        id="password2"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange}
                        placeholder='Powtórz hasło'
                    />
                    {props.errorData?.password2 && <p className={styles.errorMessage}>{props.errorData.password2}</p>}
                    
                    <div className={styles.pinContainer} >
                        <input className={styles.pin}
                            type="password"
                            onChange={(event)=> handlePin(event)}
                            placeholder='P'
                            maxLength="1"
                        />
                         <input className={styles.pin}
                            type="password"
                            onChange={(event)=> handlePin(event)}
                            placeholder='I'
                            maxLength="1"
                        />
                         <input className={styles.pin}
                            type="password"
                            onChange={(event)=> handlePin(event)}
                            placeholder='N'
                            maxLength="1"
                        />
                         <input className={styles.pin}
                            type="password"
                            onChange={(event)=> handlePin(event)}
                            maxLength="1"
                        />
                    </div>
                    {props.errorData?.pin && <p className={styles.errorMessage}>{props.errorData.pin}</p>}
                </form>
            </div>
        </>
    );
}

export default RegistrationForm