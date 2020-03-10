import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import history from '../../../services/history';
import { Container, Content, SearchContainer } from './styles';

export default function Header({ search }) {
  const [searchVal, setSearchVal] = useState(search);
  function handleSubmit({ search }) {
    if (search) {
      history.push({
        pathname: '/',
        search: `?search=${search}`,
      });
    } else {
      history.push({
        pathname: '/',
      });
    }
  }
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
              alt="GoBarber"
            />
          </Link>
          <Link to="/">UPCOMING</Link>
        </nav>
        <aside>
          <SearchContainer>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="search"
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
                placeholder="Search"
              />
            </Form>
          </SearchContainer>
        </aside>
      </Content>
    </Container>
  );
}
