import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContextProvider } from './core/lib/contexts/ThemeContext';

export const Providers = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

Providers.propTypes = {
  children: PropTypes.node,
};
