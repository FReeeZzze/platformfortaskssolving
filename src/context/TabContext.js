import React from 'react';
import PropTypes from 'prop-types';

export const TabContext = React.createContext({
  tab: 0,
  setTab: () => {},
});

export const TabContextProvider = ({ children }) => {
  const [tab, setTab] = React.useState(0);

  return (
    <TabContext.Provider
      value={{
        tab,
        setTab,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

TabContextProvider.propTypes = {
  children: PropTypes.any,
};
