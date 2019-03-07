import React from 'react';
import { node, bool, shape, number } from 'prop-types';
import classnames from 'classnames';
import convertObjectToClassName from '../utils/convertObjectToClassName';

const ListItemContent = props => {
  const { margin, column, spaceBetween, verticalCenter } = props;
  const marginVariants = convertObjectToClassName('u-mar', margin);
  const listClasses = classnames('beta-list__content', marginVariants, {
    'beta-list__content--column': column,
    'beta-list__content--between': spaceBetween,
    'beta-list__content--verticalCenter': verticalCenter
  });
  return <div className={listClasses}>{props.children}</div>;
};

ListItemContent.defaultProps = {
  column: false,
  margin: {},
  spaceBetween: false,
  verticalCenter: false
};
ListItemContent.propTypes = {
  children: node.isRequired,
  column: bool,
  margin: shape({
    top: number,
    right: number,
    bottom: number,
    left: number
  }),
  spaceBetween: bool,
  verticalCenter: bool
};

export default ListItemContent;
