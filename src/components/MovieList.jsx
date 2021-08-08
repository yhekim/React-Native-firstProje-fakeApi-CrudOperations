import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import axios from "axios"
import SearchBarMovies from './SearchBarMovies';




const MovieList = () => {
    const [movies, setMovies] = useState("")
    const [search,setSearch]=useState("")
    let filteredmovies=movies;
    if(movies !== ""){
        filteredmovies = movies.filter(
            (movie) => {
                console.log(movie)
                if(movie.name === undefined){
                    return (movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
                }else{
                    return (movie.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
                }
                
                // return (movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1)
            }
        )
    }
    

    useEffect(() => {
        axios.get("http://localhost:3002/movies").then(res => setMovies(res.data)).catch(err => console.log(err))
    }, [])

    const deleteMovie=(id)=>{
        console.log(id)
        axios.delete(`http://localhost:3002/movies/${id}`).then(res=>window.location.reload()).catch(err=>console.log(err))
    }
    return (
        <>
            <SearchBarMovies search={search} setSearch={setSearch}/>
            <div className="row">

{filteredmovies !== "" ? (
    <>
        {
            filteredmovies.map((movie) => {
                return (
                    <div className="col-lg-4" >
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                            <div className="card-body">
                                <h5 className="card-title" > {movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button"


                                        className="btn btn-danger" onClick={()=>deleteMovie(movie.id)}>Delete</button>
                                    {/* <Link to={{pathname:`/editmovies/${movie.id}`,id:movie.id}} className="btn btn-success" >Edit</Link> */}
                                    <Link to={`/editmovies/${movie.id}`} className="btn btn-success" >Edit</Link>
                                    <h2><span className="">{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })
        }
    </>
) :
 (<h1>Loading...</h1>)}








</div>
        </>
        
    )

}


export default MovieList