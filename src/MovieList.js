import React , {useContext} from 'react';
import { MovieContext } from './MovieContext';
import Movie from './Movie';


const MovieList = () => {
 const [movies, setMovies] = useContext(MovieContext)
   
    return (<div style={{textAlign: "center"}}>
       
          { movies.map(movie => {
            return(
            <Movie name={movie.name} price={movie.price} key={movie.id}/>
            )
        })} 
    </div>
       
     
    )
}

export default MovieList
