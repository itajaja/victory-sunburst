import React, { PropTypes } from "react";
import { Helpers } from "victory-core";

export default class Slice extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    slice: PropTypes.object,
    pathFunction: PropTypes.func,
    style: PropTypes.object,
    events: PropTypes.object
  };

  render() {
    const { pathFunction, slice, style, ...props } = this.props;

    return (
      <path
        d={pathFunction(slice)}
        style={Helpers.evaluateStyle(style, slice)}
        {...props}
      />
    );
  }
}
