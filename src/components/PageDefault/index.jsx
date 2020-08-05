import React from 'react';
import propTypes from 'prop-types';
import Styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = Styled.main`
    background-color: var(--black);
    color: var(--white);
    flex:1;
    padding-top:50px;
    padding-left:5%;
    padding-right:5%;
    ${({ paddingAll }) => css`
    padding:${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}

PageDefault.defautprops = {
  children: '',
  paddingAll: '',
};

PageDefault.prototype = {
  children: propTypes.string.isRequired,
  paddingAll: propTypes.string.isRequired,
};

export default PageDefault;
