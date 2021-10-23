import { FaSpinner } from "react-icons/fa";
import styles from "./Spinner.module.css";
import gif from './your.gif';

export function Spinner(ent){

    var typeStyle;

    if(ent.type === 'e'){
        
        typeStyle = <img src={gif} alt="loading..." />;
    }else{
        
        typeStyle = <FaSpinner className={styles.spinning} size={60} alt="loading..." />;
    }
    return(
        <div className={styles.spinner}>
            {typeStyle}
        </div>
    );
}