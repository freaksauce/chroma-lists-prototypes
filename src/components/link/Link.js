import React from "react";
import { string, node } from "prop-types";

const Link = props => (
  <a className="c-link" href={props.href}>
    {props.children}
  </a>
);

Link.propTypes = {
  children: node.isRequired,
  href: string.isRequired
};

export default Link;
