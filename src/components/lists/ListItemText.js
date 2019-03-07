import React from 'react';
import { node, bool, shape, number } from 'prop-types';
import classnames from 'classnames';
import convertObjectToClassName from '../utils/convertObjectToClassName';

const ListItemText = props => {
  const { bold, medium, large, margin } = props;
  const marginVariants = convertObjectToClassName('u-mar', margin);
  const listItemClasses = classnames('beta-list__text', marginVariants, {
    'u-weight--700': bold,
    'u-font--20': medium,
    'u-font--24': large
  });
  return <div className={listItemClasses}>{props.children}</div>;
};

ListItemText.defaultProps = {
  margin: {},
  bold: false,
  medium: false,
  large: false
};
ListItemText.propTypes = {
  children: node.isRequired,
  margin: shape({
    top: number,
    right: number,
    bottom: number,
    left: number
  }),
  bold: bool,
  medium: bool,
  large: bool
};

export default ListItemText;
