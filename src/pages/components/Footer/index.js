import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../../services/history';

import { Container, Content, PageButton, Page, ChangePage } from './styles';

export default function Header({ page, totalPages, search }) {
  if (!page) {
    page = 1;
  }
  function handleBackPage() {
    if (page > 1) {
      page--;
      if (search) {
        history.push({
          pathname: '/',
          search: `?page=${page}&search=${search}`,
        });
      } else {
        history.push({
          pathname: '/',
          search: `?page=${page}`,
        });
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  function handleNextPage() {
    if (page < totalPages) {
      page++;
      if (search) {
        history.push({
          pathname: '/',
          search: `?page=${page}&search=${search}`,
        });
      } else {
        history.push({
          pathname: '/',
          search: `?page=${page}`,
        });
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
  return (
    <Container>
      <Content>
        <ChangePage onClick={handleBackPage}>Prev</ChangePage>
        {page > 1 && <PageButton>1</PageButton>}
        <Page>{page}</Page>
        {page < totalPages && <PageButton>{totalPages}</PageButton>}
        <ChangePage onClick={handleNextPage}>
          <Link to="/">Next</Link>
        </ChangePage>
      </Content>
    </Container>
  );
}
