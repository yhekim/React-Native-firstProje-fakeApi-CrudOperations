import React,{useState,useEffect} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

const AddMovie = () => {
    useEffect(()=>{
        axios.get("http://localhost:3002/movies")
        .then(res=>{
            const movies=res.data
            const ids=movies.map(movie => movie.id)
            const maxId=Math.max(...ids);
            setId(maxId+1)
        }).catch(err => console.log(err))
    },[])
    const history=useHistory();
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [rating,setRating]=useState("");
    const [img,setImage]=useState("");
    const [overview,setOverview]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(name === "" || rating === "" || img === "" || overview === "") return
        const newMovie={
            id,
            name,
            rating,
            imageURL:img,
            overview
        }
        axios.post("http://localhost:3002/movies",newMovie).then(res => history.push("/")).catch(err => console.log(err))
     
    }


 

    return (
    
        <div className="container">
        <form className="mt-5" onSubmit={handleSubmit}>
        <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled/>
            <div className="form-row">
                <div className="form-group col-md-10">
                    <label htmlFor="inputName">Name</label>
                    <input  type="text" 
                            className="form-control" 
                            name="name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />
                            
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputRating">Rating</label>
                    <input 
                            type="text" 
                            className="form-control" 
                            name="rating"
                            value={rating}
                            onChange={(e)=>setRating(e.target.value)}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="inputImage">Image URL</label>
                    <input 
                            type="text" 
                            className="form-control" 
                            name="imageURL"
                            value={img}
                            onChange={(e)=>setImage(e.target.value)}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="overviewTextarea">Overview</label>
                    <textarea 
                            className="form-control" 
                            name="overview" rows="5"
                            value={overview}
                            onChange={(e)=>setOverview(e.target.value)}></textarea>
                </div>
            </div>
            <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
        </form>
    </div>
    )
}

export default AddMovie
