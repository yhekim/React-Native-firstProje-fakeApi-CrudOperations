import React, { useEffect, useState } from 'react'
import axios from "axios"
import MovieList from './MovieList'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
import AddMovie from './AddMovie'
import EditMovies from './EditMovies'
const App = () => {
   
    return (

        <Router>
            <Switch>
                <Route path="/" exact>
                    <MovieList></MovieList>
                </Route>
                <Route path="/addmovie" >
                    <AddMovie></AddMovie>
                </Route>
                <Route path="/editmovies/:id">
                    <EditMovies/>
                </Route>
            </Switch>


        </Router>
    )
}

export default App
