import React from 'react';
import { node, bool } from 'prop-types';
import classnames from 'classnames';

const ListItemIcon = props => {
  const { medium, large } = props;
  const listItemClasses = classnames('beta-list__icon', {
    'u-font--24': medium,
    'u-font--36': large
  });
  return <div className={listItemClasses}>{props.children}</div>;
};

ListItemIcon.medium = {
  medium: false,
  large: false
};
ListItemIcon.propTypes = {
  children: node.isRequired,
  medium: bool,
  large: bool
};

export default ListItemIcon;
