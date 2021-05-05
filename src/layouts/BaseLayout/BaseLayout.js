import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { SnackbarProvider } from 'react-snackbar-alert';
import { SocketContextProvider } from 'context/SocketContext';
import { TabContextProvider } from 'context/TabContext';
import SnackBarMessage from 'components/SnackBarMessage';

const BaseLayout = ({ title, children }) => {
  return (
    <SocketContextProvider>
      <SnackbarProvider component={SnackBarMessage} position="bottom-left">
        <TabContextProvider>
          <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>{children}</main>
        </TabContextProvider>
      </SnackbarProvider>
    </SocketContextProvider>
  );
};

BaseLayout.defaultProps = {
  title: '',
};

BaseLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BaseLayout;
