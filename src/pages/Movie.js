import { useEffect, useState } from "react"
import AppBar from "../components/AppBar"
import axiosConfig from "../api/axiosConfig"
import { Link, useParams } from "react-router-dom"

function Movie(){

    const { id } = useParams()
    const [movie,setMovie] = useState(null)
    const [video,setVideo] = useState(null)

    useEffect(()=>{
        axiosConfig.get(`https://api.themoviedb.org/3/movie/${id}`)
        .then((res)=>{
            setMovie(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

        axiosConfig.get(`https://api.themoviedb.org/3/movie/${id}/videos`)
        .then((res)=>{
            setVideo(res.data.results[0]?.key)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[id])

    return (
        <div>
            <AppBar />
            <div  className="movie-details">
                {movie && <img className="bd_path" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="movie poster" />}
                {movie && <img className="poster_path" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />}
                {movie && 
                    <div className="movie-grid-details">
                        <h1>{movie && movie.original_title}</h1>
                        <span>{movie && movie.release_date}</span>
                        <p>{movie && movie.overview}</p>
                        {video && <Link to={`https://youtube.com/watch?v=${video}`} className="watch-now-btn" target="_blank"><button>Watch Trailer Now</button></Link>}
                    </div>
                }
            </div>
        </div>
    )
}

export default Movie