import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Link from './Link';
import theme from '../../config/theme';

const BaseString = `
  margin: 0.125rem 0.5rem;
  display: inline-block;
  padding: 0.25rem 1rem;
  border-style: solid;
  border-width: 1px;
  transition: all 0.125s;
  cursor: pointer;
  text-align: center;

  &:hover, &:focus, &:active {
    text-decoration: none;
    outline: none;
  }
`;

const SecondaryStyleString = `
  ${BaseString}
  color: ${theme.colors.white};
  border-color: ${theme.colors.black};
  background-color: ${theme.colors.black};

  &:hover, &:focus, &:active {
    background-color: rgba(0, 0, 0, 0);
    color: ${theme.colors.black};
  }
`;

const PrimaryStyleString = `
  ${BaseString}
  color: ${theme.colors.primary};
  border-color: ${theme.colors.primary};
  background-color: none;

  &:hover, &:focus, &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

export const Button = styled('button')(({ primary }) => (
  primary ? PrimaryStyleString : SecondaryStyleString
));

export const ButtonLink = styled(Link)(({ primary }) => (
  primary ? PrimaryStyleString : SecondaryStyleString
));

ButtonLink.propTypes = {
  primary: PropTypes.bool,
};

ButtonLink.defaultProps = {
  primary: false,
};
