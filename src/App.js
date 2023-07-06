import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<MovieList />}/>
        <Route path="/movies/:type" element={<MovieList />} />
        <Route path="/movie/:id" element={<Movie />}/>
      </Routes>
    </Router>
  );
}

export default App;
