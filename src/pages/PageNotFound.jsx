import { Spinner } from "../components/Spinner";
import styles from "./PageNotFound.module.css";

export function PageNotFound(){
    return(
        <div className={styles.page}>
            <Spinner type={'e'}/>
            <h2>ERROR 404:  Page not found</h2>
        </div>
    );
}