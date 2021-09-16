import React,{useContext} from 'react';
import  { MovieContext } from './MovieContext';


function Nav() {
    const [movies, SetMovies] = useContext(MovieContext);
    return (
        
        <div style={{display:"flex", backgroundColor: "#000", color: "#fff" , alignItems: "center", justifyContent: "space-around"}}>
            <h1>Kavya</h1>
            <h2>Number of Movies:{movies.length} </h2>
        </div>
       
    )
}

export default Nav
