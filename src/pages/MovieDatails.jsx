import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { get } from '../utils/httpClient';
import styles from "./MovieDatails.module.css";
import { PageNotFound } from './PageNotFound';

export function MovieDetails(){
    //Obtnenemos el id definido en el router (app) --- Hooks
    const {movieId}= useParams();
    //Cargar loader 
    const [isLoading, setIsLoading] = useState(true);
    const [movie,setMovie] = useState(null);
    const [error,setState] = useState(false);

    useEffect(() =>{
        setIsLoading(true);
        get("/movie/"+ movieId).then((data)=>{
            setMovie(data);
            if(data.status === undefined){
                setState(true);
                setIsLoading(false);
                
            }else{
                setIsLoading(false);
            }
        });

        //Si el movieId cambia --> se ejecuta 

    },[movieId]);

    if(isLoading){
        return <Spinner/>;
    }

    if(error){
        return <PageNotFound/>;
    }

    
    const imagUrl = "https://image.tmdb.org/t/p/w500/"+ movie.poster_path;
    return( <div className={styles.detailsContainer}>
        <img className={styles.col + " "+ styles.movieImage} src={imagUrl} alt={movie.title}/>
        <div className={ styles.col + " "+ styles.movieDetails } >
            <p className={styles.first}><strong>Title:</strong> {movie.title}</p>
            <p><strong>Description:</strong> {movie.overview}</p>
            <p>
                <strong>Generes: </strong>{movie.genres.map((genre) => genre.name).join(", ")}
            </p>
        </div>
    </div>);
    
}