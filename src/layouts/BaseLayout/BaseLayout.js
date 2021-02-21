import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const BaseLayout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
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
