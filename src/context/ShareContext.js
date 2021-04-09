import React from 'react';
import PropTypes from 'prop-types';

export const ShareContext = React.createContext({
  stringInput: '',
  setString: () => {},
});

export const ShareContextProvider = ({ children }) => {
  const [stringInput, setString] = React.useState('');

  return (
    <ShareContext.Provider
      value={{
        stringInput,
        setString,
      }}
    >
      {children}
    </ShareContext.Provider>
  );
};

ShareContextProvider.propTypes = {
  children: PropTypes.any,
};
