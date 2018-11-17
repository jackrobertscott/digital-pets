import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #ccc;
  -webkit-app-region: drag;
`;

const MenuBar = () => <Wrap />;

MenuBar.propTypes = {};

MenuBar.defaultProps = {};

export default MenuBar;
