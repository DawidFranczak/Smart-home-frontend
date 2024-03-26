import { Link } from "react-router-dom";
import icons from "../../const/icons"
import styles from "./BackArrow.module.css"

const BackArrow = ({path}) =>{
    
    return(
        <Link className={styles.iconBack} to={path}>   
            <svg viewBox="0 0 30 30">
                <path d={icons.backArrow} fill="#FFFFFF"></path>
            </svg>
        </Link>
    );
}

export default BackArrow;