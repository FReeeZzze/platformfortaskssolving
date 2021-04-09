import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ShareContextProvider } from 'context/ShareContext';
import { SocketContextProvider } from 'context/SocketContext';

const BaseLayout = ({ title, children }) => {
  return (
    <ShareContextProvider>
      <SocketContextProvider>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{children}</main>
      </SocketContextProvider>
    </ShareContextProvider>
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
