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

class Demo extends React.Component {
  onHover(selected) {
    this.setState({ selected });
  }

  render() {
    const { selected } = this.state || {};
    const ancestors = getAncestors(selected);

    return (
      <div className="demo">
        <h2 className="label">{selected && selected.name}</h2>
        <VictorySunburst
          data={data}
          style={{
            data: {
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
