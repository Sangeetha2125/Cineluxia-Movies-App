import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/imdb-logo.png'
import MenuIcon from '@mui/icons-material/Menu';

function AppBar(){

    const handleToggleMenu = () => {
        const navbar = document.querySelector('.nav-links')
        navbar.classList.toggle('open-menu')
    }

    return (
        <div className="navbar">
            <Link to="/"><img src={logo} alt="IMDB Logo"/></Link>
            <div className="hamburger-menu" onClick={handleToggleMenu}>
                <MenuIcon sx={{fontSize:"1.5em"}}/>
            </div>
            <div className="nav-links">
                <NavLink to="/movies/popular">Popular</NavLink>
                <NavLink to="/movies/top_rated">Top Rated</NavLink>
                <NavLink to="/movies/upcoming">Upcoming</NavLink>
            </div>
        </div>
    )
}

export default AppBar