import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { SocketContextProvider } from 'context/SocketContext';

const BaseLayout = ({ title, children }) => {
  return (
    <SocketContextProvider>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
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
