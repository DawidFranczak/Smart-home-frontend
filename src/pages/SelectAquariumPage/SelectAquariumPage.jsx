import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import useFetchData from "../../hooks/useFetchData"

import BackArrow from "../../components/BackArrow/BackArrow";

import endpoints from "../../const/endpoints"

import styles from "./SelectAquariumPage.module.css"

const SelectAquariumPage = () =>{
    const { getAuthToken } = useAuth();
    const { data, fetchData } = useFetchData();
    const navigate = useNavigate();

    useEffect(()=>{
        const getAquariumData = async ()=>{
            await fetchData(
                endpoints.getAllAquarium,
                {
                    method: 'GET',
                    headers: {"Authorization": getAuthToken()},
                }
            )
        }
        getAquariumData();
    },[])
 
    const nav = (event) =>{
        setTimeout(()=>{
            navigate(`/aquarium/${event.target.id}/`);
        },500);
    }

    return(
        <div className={styles.container}>
            <BackArrow path="/home"/>
            {data?.map((aqua)=>{
               return <button className={styles.link} id={aqua.id} key={aqua.id} onClick={nav}>{aqua.name}</button>
            })}
            
        </div>   
    )   
};

export default SelectAquariumPage;