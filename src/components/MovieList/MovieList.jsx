/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map((
      movie
    ) => {
      return (
        <MovieCard
          // eslint-disable-next-line
          key={movie.imdbId}
          movie={movie}
        />
      );
    })}
  </div>
);
