import React from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  const { search } = queryString.parse(children.props.location.search);
  return (
    <Wrapper>
      <Header search={search} />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
