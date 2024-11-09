import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import axios from 'axios'

import { useSelector, useDispatch } from "react-redux";

function App() {
  const [search, setSearch] = useState('spider')

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const getMovies = async () => {
    if(search === '') {
      const { data } = await axios(`https://www.omdbapi.com/?apikey=af397643&s=spider`)
      dispatch({type: 'GET_DATA', payload: {allMovie: data.Search}})
    } else {
      const { data } = await axios(`https://www.omdbapi.com/?apikey=af397643&s=${search}`)
      dispatch({type: 'GET_DATA', payload: {allMovie: data.Search}})
    }
   
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  useEffect(() => {
    getMovies()
  }, [])


  return (
    <>
      <Header 
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        title="FinproH8"
      />
      <Movie 
        allMovie={state.allMovie}
      />
    </>
  )
}

export default App
