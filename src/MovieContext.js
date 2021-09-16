import React,{useState, createContext} from 'react'

export const MovieContext = createContext();
function MovieProvider(props) {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 25624
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 256624
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 566124
        }


    ]);
    return (
        <div>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}

export default MovieProvider;
