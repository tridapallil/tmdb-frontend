import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { FaSpinner } from 'react-icons/fa';
import enUS from 'date-fns/locale/en-US/index';
import queryString from 'query-string';

import api from '../../services/api';
import history from '../../services/history';
import { MovieList, Title, MovieEmpty } from './styles';
import Footer from '../components/Footer';
import alternativeImage from '../assets/default2.jpg';

export default function Main({ location }) {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [loading, setLoading] = useState(false);
  const { page, search } = queryString.parse(location.search);

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);
      const response = await api.get(`movies`, { params: { page, search } });

      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
      setLoading(false);
    }
    loadMovies();
  }, [search, page]);

  function getDetail(id) {
    history.push({
      pathname: `/detail/${id}`,
    });
  }

  return (
    <>
      {movies.length > 0 ? (
        <MovieList>
          {movies.map(movie => (
            <li key={movie.id}>
              <img
                src={
                  movie.poster
                    ? `${process.env.REACT_APP_API_IMAGE_URL}/${movie.poster}`
                    : alternativeImage
                }
                alt={movie.name}
              />
              <button type="button" onClick={() => getDetail(movie.id)}>
                <span>DETAILS</span>
              </button>
              <div>
                <Title>{movie.name}</Title>
              </div>
              <span>
                <strong>Genres:</strong>{' '}
                {movie.genres.length > 0 ? movie.genres.join(', ') : ''}
              </span>
              <p>
                Release:{' '}
                {movie.release_date &&
                  format(parseISO(movie.release_date), 'MMMM d, yyyy', {
                    locale: enUS,
                  })}
              </p>
            </li>
          ))}
        </MovieList>
      ) : (
        <MovieEmpty loading={loading}>
          {loading ? <FaSpinner color="#999" size={30} /> : <h1>No results</h1>}
        </MovieEmpty>
      )}
      {movies.length > 0 ? (
        <Footer page={page} totalPages={totalPages} search={search} />
      ) : (
        ''
      )}
    </>
  );
}
