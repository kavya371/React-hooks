import React, { useContext } from 'react'
import { useState } from 'react';
import { MovieContext } from './MovieContext';

function AddMovie() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [movies, setMovies] = useContext(MovieContext);

    const addMovies = (e) => 
       {e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name , price: price}]);
        setName("");
        setPrice('');

    }
  
    return (
        <div onSubmit={addMovies}>
            <form style={{display: "flex", justifyContent: "center"}}>
            <input type="text" value={name} onChange={e => setName(e.target.value)}key={movies.id}/>
            <input type="text" value={price} onChange={e=> setPrice(e.target.value)} key={movies.id}/>
            <button>Add Movie</button>
            </form>
        </div>
    )
}

export default AddMovie
