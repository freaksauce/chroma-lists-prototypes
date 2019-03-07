import React from 'react';
import { node, bool } from 'prop-types';
import classnames from 'classnames';

const List = props => {
  const { inline, border, bullet, block, detail, action } = props;
  const listClasses = classnames('beta-list', {
    'beta-list--inline': inline,
    'beta-list--border': border,
    'beta-list--bullet': bullet,
    'beta-list--block': block,
    'beta-list--detail': detail,
    'beta-list--action': action
  });
  return <ul className={listClasses}>{props.children}</ul>;
};

List.defaultProps = {
  inline: false,
  border: false,
  bullet: false,
  block: false,
  detail: false,
  action: false
};
List.propTypes = {
  children: node.isRequired,
  inline: bool,
  border: bool,
  bullet: bool,
  block: bool,
  detail: bool,
  action: bool
};

export default List;
