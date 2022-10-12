import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./pages/Homepage";
import Movielist from "./Components/MovieList/Movielist";
import MovieDet from "./pages/MovieDet/MovieDet";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="movie/:id" element={<MovieDet />}></Route>
          <Route path="movies/:type" element={<Movielist />}></Route>
          <Route path="/*" element={<h1>Error</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
