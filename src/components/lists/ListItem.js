import React from 'react';
import { node, number, shape, bool } from 'prop-types';
import classnames from 'classnames';
import convertObjectToClassName from '../utils/convertObjectToClassName';

const ListItem = props => {
  const { margin, button } = props;
  const marginVariants = convertObjectToClassName('u-mar', margin);
  const listClasses = classnames('beta-list__item', marginVariants, {
    'beta-list__item--button': button
  });

  return <li className={listClasses}>{props.children}</li>;
};

ListItem.defaultProps = {
  margin: {},
  button: false
};
ListItem.propTypes = {
  children: node.isRequired,
  margin: shape({
    top: number,
    right: number,
    bottom: number,
    left: number
  }),
  button: bool
};

export default ListItem;
