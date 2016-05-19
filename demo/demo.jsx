import d3 from "d3";
import React from "react";

import {VictorySunburst} from "../src/index";
import data from "./flare";

const getAncestors = (node = {}) => {
  const path = [];
  let current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
};

const valueFuncs = [
  ({ size }) => size,
  () => 1
];

class Demo extends React.Component {
  state = {}

  onHover(selected) {
    this.setState({ selected });
  }

  onToggleSize() {
    const { x } = this.state;
    this.setState({ x: x ? 0 : 1 });
  }

  render() {
    const { selected, x } = this.state;
    const ancestors = getAncestors(selected);
    const valueFunc = valueFuncs[x || 0];

    return (
      <div className="demo">
        <span>
          <button onClick={this.onToggleSize.bind(this)}>
            toggle
          </button>
        </span>
        <h2 className="label">{selected && selected.name}</h2>
        <VictorySunburst
          animate={{duration: 500}}
          data={data()}
          value={valueFunc}
          style={{
            data: {
              fillRule: "evenodd",
              padding: 0,
              opacity: (slice) => ancestors.indexOf(slice) >= 0 ? 1 : 0.5,
              display: (slice) => slice.depth ? "initial" : "none"
            }
          }}
          events={{
            data: {
              onMouseOver: this.onHover.bind(this)
            }
          }}
        />
      </div>
    );
  }
}

export default Demo;
