import React, { Fragment } from 'react';
import { bool, string, node, shape, func } from 'prop-types';

const ProgressButton = props => {
  const { initial, loading, success, error } = props.animation;
  const { children } = props;
  return (
    <Fragment>
      {initial && (
        <button className="c-btn c-btn__primary" {...props}>
          {children}
        </button>
      )}
      {loading && (
        <button className="c-btn c-btn__primary--outline" {...props}>
          Loading
        </button>
      )}
      {success && (
        <button className="c-btn c-btn__primary bg-green" {...props}>
          Success
        </button>
      )}
      {error && (
        <button className="c-btn c-btn__primary bg-red" {...props}>
          Error
        </button>
      )}
    </Fragment>
  );
};

ProgressButton.defaultProps = {
  animation: {
    initial: true,
    loading: false,
    success: false,
    error: false
  }
};
ProgressButton.propTypes = {
  children: node.isRequired,
  link: bool,
  icon: bool,
  icon: string,
  animation: shape({
    initial: bool,
    loading: bool,
    success: bool,
    error: bool
  }),
  onClick: func
};

export default ProgressButton;
