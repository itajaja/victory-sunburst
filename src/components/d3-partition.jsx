import d3 from "d3";
import React from "react";

// process the incoming data through d3 partition
export default (Component) => {

  return class Wrapper extends React.Component {
    static propTypes = {
      data: React.PropTypes.object,
      value: React.PropTypes.func.isRequired
    };

    static defaultProps = {
      value: () => 1
    }


    render() {
      const { data, value, ...props } = this.props;

      const partionedData = Array.isArray(data)
        ? data
        : d3.layout.partition()
          .sort(null)
          .value(value)
          .nodes(data);

      return (
        <Component {...props} data={partionedData}/>
      );
    }
  };
};
