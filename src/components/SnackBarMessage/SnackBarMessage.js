import React from 'react';
import { Snackbar } from 'react-snackbar-alert';
import { string } from 'prop-types';

const SnackBarMessage = (props) => {
  return (
    <Snackbar {...props}>
      <span>{props.message}</span>
    </Snackbar>
  );
};

SnackBarMessage.defaultProps = {
  message: '',
};

SnackBarMessage.propTypes = {
  message: string,
};

export default SnackBarMessage;
