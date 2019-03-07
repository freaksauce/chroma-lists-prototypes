import React from 'react';
import { node, bool } from 'prop-types';

const ListItemHeading = props => {
  return (
    <div className="c-list__heading">
      {props.secondary ? (
        <h5 className="u-mar--0">{props.children}</h5>
      ) : (
        <h4 className="u-mar--0">{props.children}</h4>
      )}
    </div>
  );
};

ListItemHeading.defaultProps = {
  secondary: false
};
ListItemHeading.propTypes = {
  children: node,
  secondary: bool
};

export default ListItemHeading;
