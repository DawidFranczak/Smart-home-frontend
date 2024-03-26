import { useState } from "react";

import useAuth from "../../hooks/useAuth";
import useFetchData from "../../hooks/useFetchData";

import FormField from "../../components/FormField/FormField";
import AddingDeviceSelect from "../../components/AddingDeviceSelect/AddingDeviceSelect";
import BackArrow from "../../components/BackArrow/BackArrow"
import Button from "../../components/Button/Button"
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation"

import endpoints from '../../const/endpoints'

import styles from "./AddingPage.module.css"


const AddingPage = () =>{
    const { getAuthToken } =  useAuth();
    const { data, isloading, status, fetchData } = useFetchData();

    const [requestData, setRequestData] = useState({
        name:"",
        type:""
    })

    const URL = endpoints.addDevice;
    const OPTION = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": getAuthToken(),
        },
        body: JSON.stringify(requestData)
    }
    const CLASSNAME = status === 201 ? styles.successMessage : styles.errorMessage;

    const onChangeName = (event) => {
        setRequestData({...requestData, name: event.target.value});
    };

    const selectedDevice = (event) =>{
        setRequestData({...requestData, type: event.target.value});

    };

    const addDevice = async () => {
        await fetchData(URL, OPTION)
    }

    return (
        <div className={styles.container}>
            {isloading && (
                <div className={styles.isLoading}>
                    <p>Trwa Dodawanie</p>
                    <LoadingAnimation/>
                </div>
            )}
            <BackArrow path="/home/"/>
            <FormField 
                className = {styles.field}
                onChange = {onChangeName}
                type = "text"
                placeholder = "Nazwa"
            />
            
            {data?.message && isloading === false && <span className={CLASSNAME}>{data.message}</span>}

            <div className={styles.containerRadio}>
                {/* <AddingDeviceSelect name="Temperatura" value="temperature" selected={selectedDevice}/> */}
                {/* <AddingDeviceSelect name="Roleta" value="sunblind" selected={selectedDevice}/> */}
                <AddingDeviceSelect name="Akwarium" value="aquarium" selected={selectedDevice}/>
                {/* <AddingDeviceSelect name="Światło" value="light" selected={selectedDevice}/> */}
                <AddingDeviceSelect name="Schody" value="stairs" selected={selectedDevice}/>
                {/* <AddingDeviceSelect name="Czytnik RFID" value="RFID" selected={selectedDevice}/> */}
                {/* <AddingDeviceSelect name="Przycisk" value="button" selected={selectedDevice}/> */}
                {/* <AddingDeviceSelect name="Lampy" value="lights" selected={selectedDevice}/> */}
                {/* <AddingDeviceSelect name="Karty" value="card" selected={selectedDevice}/> */}
            </div>
            <Button className={styles.button} submit={addDevice} text="Dodaj"/>
        </div>
    );
};

export default AddingPage;