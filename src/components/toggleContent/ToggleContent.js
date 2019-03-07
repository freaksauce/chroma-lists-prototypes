import React, { Component } from "react";
import { oneOfType, arrayOf, element, string } from "prop-types";

class ToggleContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    this.setState({ visible: !this.state.visible });
    e.preventDefault();
  }
  render() {
    const { buttonText, children } = this.props;
    const buttonId = `${buttonText.replace(/\s+/g, "-").toLowerCase()}-toggle`;
    const contentId = `${buttonId}-content`;
    return (
      <div className="c-toggle-content">
        <a href="" onClick={e => this.onClick(e)}>
          {buttonText}
        </a>
        {this.state.visible && (
          <div
            className="c-toggle-content__content u-mar-t--3"
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            aria-hidden={!this.state.visible}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
}

ToggleContent.defaultProps = {
  buttonText: ""
};

ToggleContent.propTypes = {
  children: oneOfType([arrayOf(element), element]).isRequired,
  buttonText: string
};

export default ToggleContent;
