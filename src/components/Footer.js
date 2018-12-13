import React from 'react';
import styled from 'react-emotion';

const Content = styled.p`
  color: ${props => props.theme.colors.secondary};
  padding: 0 ${props => props.theme.contentPadding};
  text-align: center;
`;

const Footer = () => (
  <Content>
    &copy; 2018
    <br />
    <a href="https://github.com/noltron000/noltron000.github.io" target="_blank" rel="noopener noreferrer">
      GitHub Repository
    </a>
  </Content>
);

export default Footer;
