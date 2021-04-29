import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { SocketContextProvider } from 'context/SocketContext';
import { SnackbarProvider } from 'react-snackbar-alert';
import SnackBarMessage from 'components/SnackBarMessage';

const BaseLayout = ({ title, children }) => {
  return (
    <SocketContextProvider>
      <SnackbarProvider component={SnackBarMessage} position="bottom-left">
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{children}</main>
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
