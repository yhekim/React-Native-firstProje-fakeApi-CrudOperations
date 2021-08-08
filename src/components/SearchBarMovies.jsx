import React from 'react'
import {Link} from "react-router-dom"

const SearchBarMovies = ({search,setSearch}) => {
    return (
        <div>
             <form >
                    <div className="form-row mb-5" 
                    style={{display:"flex"}}>
                        
                        <div className="col-lg-10">
                        
                            <input 
                        
                         
                            type="text"  className="form-control" 
                            style={{padding:"4px",margin:"7px"}}
                            placeholder="Search a movie"
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-2" style={{padding:"4px",margin:"7px"}}>
                            
                            <Link to="/addmovie" type="button" 
                            
                            className="btn btn-md btn-danger"
                            style={{float:"right"}}>
                                Add Movie
                               
                            </Link>
                        </div>
                     
                        
                    </div>
                </form>
        </div>
    )
}

export default SearchBarMovies
