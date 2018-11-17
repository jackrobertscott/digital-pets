import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuBar from '../menu/MenuBar';

const Wrap = styled.div`
  background-color: cyan;
`;

const AppLayout = ({ children }) => (
  <Wrap>
    <MenuBar />
    {children}
  </Wrap>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

AppLayout.defaultProps = {};

export default AppLayout;
