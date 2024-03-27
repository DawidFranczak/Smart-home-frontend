import { useParams } from "react-router-dom"
import { useEffect, useRef} from "react";

import useAuth from "../../hooks/useAuth";
import useFetchData from "../../hooks/useFetchData";

import BackArrow from "../../components/BackArrow/BackArrow";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import InputTime from "../../components/InputTime/InputTime";
import Button from "../../components/Button/Button"
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation"


import endpoints from "../../const/endpoints";
import styles from "./AquariumPage.module.css"

const AquariumPage =()=>{
    const { getAuthToken } = useAuth();
    const { status, data, fetchData } = useFetchData();
    const aqua = useParams();
    const ledData = useRef({
        ledStart:"",
        ledStop:""
    });
    const fluoData = useRef({
        fluoStart:"",
        fluoStop:""
    });

    useEffect(()=>{
        const getAquariumData = ()=>{
            fetchData(
                endpoints.getAquarium+aqua.id+"/",
                {
                    method: 'GET',
                    headers: {"Authorization": getAuthToken()},
                }
            )
        }
        getAquariumData()
    },[])

    const sendData = (url, data) => {
        fetchData(
            url,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": getAuthToken(),
                },
                body: JSON.stringify(data)
            }
        );

    }

    const saveLedData = (data) =>{
        ledData.current = {...ledData.current, [data.id]:data.time}
    }

    const saveFluoData = (data) =>{
        fluoData.current = {...fluoData.current, [data.id]:data.time}

    }

    const changeColor = (color) =>{
        sendData(
            endpoints.setAquariumColor + aqua.id+"/",
            {color:color}
        );
    }

    const ledSave = () =>{
        sendData(
            endpoints.setAquariumLedTime + aqua.id+"/",
            ledData.current
        );
    }

    const fluoSave = () =>{
        sendData(
            endpoints.setAquariumFluoTime + aqua.id+"/",
            fluoData.current
        );
    }

    if(data === null){
        return <LoadingAnimation/>
    }

    return(
        <div className={styles.container}>
            <BackArrow path="/aquarium/all/"/>
            {status === 501 ? <ErrorMessage message="Błąd w komunikacji."/> : ""}
            <ColorPicker getColor={changeColor} color={data?.color}/>
            <p>Czas ledów</p>
            <div className={styles.times}>
                <InputTime initialTime={data?.ledStart} changeData={saveLedData} id="ledStart"/>
                <InputTime initialTime={data?.ledStop} changeData={saveLedData} id="ledStop"/>
            </div>
            <Button text="Zapisz" className={styles.button} submit={ledSave}/>
            <p>Czas świetlówki</p>
            <div className={styles.times}>
                <InputTime initialTime={data?.fluoStart} changeData={saveFluoData} id="fluoStart"/>
                <InputTime initialTime={data?.fluoStop} changeData={saveFluoData} id="fluoStop"/>
            </div>
            <Button text="Zapisz" className={styles.button} submit={fluoSave}/>
        </div>
    )
}

export default AquariumPage