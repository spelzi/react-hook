// App.js
import React, { useState } from 'react';
import MovieList from './compnonet/MovieList';
import Filter from './compnonet/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState([
  // you can add move movies here 
    { title: 'The return of the Gods', description: 'A local movis telling a deep tell of the pass', posterURL: 'https://hips.hearstapps.com/hmg-prod/images/best-movies-1606255499.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*', rating: 4.5 },
    { title: 'Adems Book ', description: 'This is a story tell a historias passed of a world lost to the sand storm', posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9im_C8W_kOISgRkPt0eb2L4Rj0miXh3h1DuDVFMJ8QaJB3YV-Hhn7MQSo0HBU9CPaQ8o&usqp=CAU', rating: 3.7 },
    { title: 'The return of the Gods', description: 'A local movis telling a deep tell of the pass', posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIYlsd_ZesDX03AEPdaDX5EQDzZuM-ssIsw&usqp=CAU', rating: 4.5 },
    { title: 'Adems Book ', description: 'This is a story tell a historias passed of a world lost to the sand storm', posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9im_C8W_kOISgRkPt0eb2L4Rj0miXh3h1DuDVFMJ8QaJB3YV-Hhn7MQSo0HBU9CPaQ8o&usqp=CAU', rating: 3.7 },
    
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const filterTitle = (title) => {
    const filtered = movies.filter((movie) => movie.title.includes(title));
    setFilteredMovies(filtered);
  };

  const filterRating = (rating) => {
    const filtered = movies.filter((movie) => movie.rating >= parseFloat(rating));
    setFilteredMovies(filtered);
  };

  return (
    // this is the web display content
    <div className="App">
      <h1>Movie List</h1>
      <Filter onFilterTitle={filterTitle} onFilterRating={filterRating} />
      <MovieList movies={filteredMovies}  />
    </div>
  );
}

export default App;



