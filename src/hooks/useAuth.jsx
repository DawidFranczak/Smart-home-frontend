import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = (check = true) => {
    const navigate = useNavigate();
    const TOKENNAME = "Token"

    useEffect(()=>{
        if(check && localStorage.getItem(TOKENNAME) === null)
            navigate("/",{replace: true})
    },[])

    const getAuthToken = () =>{
        return "Bearer " + localStorage.getItem(TOKENNAME)
    }
    const setAuthToken = (token) => {
        localStorage.setItem(TOKENNAME,token);
    }

    return { setAuthToken, getAuthToken }
}

export default useAuth