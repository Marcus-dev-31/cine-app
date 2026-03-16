import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Página no encontrada</h3>
      <Link 
        to="/"
        className={styles.link}  
      >Volver a Inicio</Link>
    </div>
    
  )
}
