import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const Content = styled.div`
  margin: 2rem auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 0;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;

const Avatar = styled.div`
  height: 125px;
  width: 125px;
  margin: 0 auto;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;

  img {
    border-radius: 50%;
  }
`;

const Name = styled.h1`
  margin: 1rem 0 0.25rem 0;
  color: ${props => props.theme.colors.color};
`;

const Status = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialMedia = styled.div`
  margin-top: 2rem;

  a {
    margin: 0 2rem;
  }
`;

const Header = ({ avatar, name, status, socialMedia }) => (
  <Wrapper>
    <Content>
      <Avatar>
        <img src={avatar} alt={name} />
      </Avatar>
      <Name>{name}</Name>
      <Status>{status}</Status>
      <SocialMedia>
        {socialMedia.map(social => (
          <a key={social.name} href={social.url} rel="noopener noreferrer" target="_blank">
            {social.name}
          </a>
        ))}
      </SocialMedia>
    </Content>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  socialMedia: PropTypes.array.isRequired,
};
