import { useState, useEffect } from "react"

import styles from "./InputTime.module.css"


const InputTime = ({initialTime, id, changeData}) =>{
    const [data, setData] = useState({
        id: id,
        time: initialTime
    });

    useEffect(()=>{
        changeData(data);
    },[data])


    const updateTime = (event) =>{
        setData({...data, time: event.target.value})
    }

    return(
        <input 
            type="time" 
            id={id} 
            step="60" 
            onChange={updateTime} 
            value={data.time} 
        />
    )
}

export default InputTime