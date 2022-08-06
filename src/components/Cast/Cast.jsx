import { getCastMovies } from '../../API/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from './CastItem ';
//----------------------------------------------//

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastMovies(movieId).then(data => {
      setMovieCast(data.cast);
    });
  }, [movieId]);
  return (
    <>
      {movieCast && movieCast.length ? (
        <ul>
          {movieCast.map(item => {
            return (
              <li key={item.id}>
                <CastItem cast={item}></CastItem>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </>
  );
};
