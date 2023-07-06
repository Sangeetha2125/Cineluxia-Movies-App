import { useEffect, useState } from "react"
import axiosConfig from "../api/axiosConfig"
import { Link, useParams } from "react-router-dom"
import AppBar from "../components/AppBar"
import { Pagination, Stack, ThemeProvider, createTheme } from "@mui/material"

function MovieList(){

    const darkTheme = createTheme({
        palette:{
            mode:'dark'
        }
    })

    const {type} = useParams()
    const [moviesList,setMoviesList] = useState([])
    const [page,setPage] = useState(1)
    const [totalPages,setTotalPages] = useState()

    useEffect(()=>{
        setPage(1)
    },[type])

    useEffect(()=>{
        axiosConfig.get(`https://api.themoviedb.org/3/movie/${type?type:'popular'}?language=en-US&page=${page}`)
        .then(res => {
            setTotalPages(res.data.total_pages)
            setMoviesList(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    },[type,page])

    return (
        <div>
            <AppBar />
            <div className="movie-list">
                {type ? <h1>{type && type === "top_rated" ? 'top rated': type}</h1>:
                <h1>Popular</h1>}
                <div className="movie-grid">
                    {moviesList && moviesList.map(movie => (
                        <Link to={`/movie/${movie && movie.id}`} key={movie.id}>
                            <div className="movie-card">
                                <img src={`https://image.tmdb.org/t/p/w300${movie && movie.poster_path}`} alt="movie-poster" className="movie-card-img"/>
                            </div>
                        </Link>
                    ))}
                </div>
                <ThemeProvider theme={darkTheme}>
                    <Stack justifyContent="end" direction="row">
                    {moviesList && <Pagination 
                        count={moviesList && totalPages}
                        page={parseInt(page)}
                        onChange={(event)=>{
                            setPage(event.target.textContent)
                            window.scroll(0,0)
                        }}
                        shape="rounded" 
                        variant="outlined" 
                        size="large" />}
                    </Stack>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default MovieList