import icons from "../../const/icons"

import { Link ,useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "./HomePage.module.css"

const HomePage = () =>{
    const {} = useAuth();
    const navigate = useNavigate();

    const nav = (event) =>{
        const PAGE = event.target.id;
        setTimeout(()=>{
            switch(PAGE){
                case "aqua":
                    navigate("/");
                    break;
                case "stairs":
                    navigate("/",);
                    break;
            }
            
        },500);
    }

    return(
        <div className={styles.container}>
            <Link className={`${ styles.containerIcon} ${styles.settingsIcon}`}>
                <svg viewBox="0 0 30 30">
                    <path d={icons.settings} fill="#FFFFFF"></path>
                </svg>
            </Link>
            <Link className={`${styles.containerIcon} ${styles.addIcon}`} to="/add/device/">
                <svg viewBox="0 0 30 30">
                    <path d={icons.plus} fill="#FFFFFF"></path>
                </svg>
            </Link>
            <button className={styles.containerLink} id="aqua" onClick={nav}>Akwarium</button>
            <button className={styles.containerLink} id="stairs" onClick={nav} >Schody</button>
        </div>
    )
}

export default HomePage