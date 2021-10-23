import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Moviecard } from './MovieCard';
import styles from './MoviesGrid.module.css';


export function MoviesGrid(){
    //useState es el estado 
    const[movies, setMovies ] = useState([]);
    //LLAMADA ASINCRONA
    //Los efectos se cargan cunado existe DOM

    useEffect(()=>{
       
        get("/discover/movie").then((data) => {
            
            setMovies(data.results);
        });
        // ,[] arreglo de dependecias se pone para no volver a ejecutar la funcion
        // si esta vacio le decimos que solo se ejecute una vez
        
    },[]);

    return(
        //Creacion del DOM (estructura/esqueleto)
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>( 
                 <Moviecard key= {movie.id} movie={movie} />
            ))}
        </ul>
    );
}