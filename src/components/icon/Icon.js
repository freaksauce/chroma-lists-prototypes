import React from "react";
import { string } from "prop-types";

const Icon = props => (
  <i className={props.className} aria-label={props.ariaLabel} />
);

Icon.defaultProps = {
  className: "",
  ariaLabel: null
};

Icon.propTypes = {
  /**
   * Additional util classes if needed
   */
  className: string,
  /**
   * Aria label for accessibility
   */
  ariaLabel: string
};

export default Icon;
