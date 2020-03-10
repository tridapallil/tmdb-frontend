import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { Redirect } from 'react-router-dom';
import enUS from 'date-fns/locale/en-US/index';
import api from '../../services/api';
import alternativeImage from '../assets/default2.jpg';

import {
  Container,
  DescriptionContainer,
  Title,
  Tag,
  GenreTags,
} from './styles';

export default function Main({ match }) {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [exists, setExists] = useState(true);
  const { movieId } = match.params;

  useEffect(() => {
    async function loadMovie() {
      const response = await api.get(`movies/${movieId}`);

      if (response.data.release_date) {
        response.data.release_date = format(
          parseISO(response.data.release_date),
          'MMMM d, yyyy',
          { locale: enUS }
        );
      }
      if (response.data.error) {
        setExists(false);
      } else {
        setMovie(response.data);
        setGenres(response.data.genres);
      }
    }
    loadMovie();
  }, []);

  return (
    <Container>
      {exists ? (
        <footer>
          <img
            src={
              movie.poster
                ? `${process.env.REACT_APP_API_IMAGE_URL}/${movie.poster}`
                : alternativeImage
            }
            alt={movie.name}
          />

          <DescriptionContainer>
            <Title>{movie.name}</Title>
            <p>Release: {movie.release_date}</p>
            <div>
              <p>
                <b>Overview: </b>
              </p>
              <p>{movie.overview}</p>
              <div>
                <p>Genres:</p>
                <p>
                  <GenreTags>
                    {genres.map(genre => (
                      <Tag>{genre.name} </Tag>
                    ))}
                  </GenreTags>
                </p>
              </div>
            </div>
          </DescriptionContainer>
        </footer>
      ) : (
        <Redirect to="/" />
      )}
    </Container>
  );
}
