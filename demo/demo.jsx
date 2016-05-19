import React from "react";

import {VictorySunburst} from "../src/index";
import flare from "./flare";
import krona from "./krona";

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
  state = {
    data: krona
  }

  onClick(selected) {
    if (selected.depth === 0 && selected.parent) {
      this.setState({ data: selected.parent });
    } else {
      this.setState({ data: selected });
    }
  }

  onHover(selected) {
    this.setState({ selected });
  }

  onToggleSize() {
    const { x } = this.state;
    this.setState({ x: x ? 0 : 1 });
  }

  onToggleDataset() {
    const { data } = this.state;
    this.setState({data: data === flare ? krona : flare});
  }

  render() {
    const { selected, x, data } = this.state;
    const ancestors = getAncestors(selected);
    const valueFunc = valueFuncs[x || 0];

    return (
      <div className="demo">
        <span>
          <button onClick={this.onToggleSize.bind(this)}>
            toggle measure
          </button>
        </span>
        <span>
          <button onClick={this.onToggleDataset.bind(this)}>
            toggle dataset
          </button>
        </span>
        <h2 className="label">{selected && selected.name}</h2>
        <VictorySunburst
          data={data}
          value={valueFunc}
          style={{
            data: {
              opacity: (slice) => ancestors.indexOf(slice) >= 0 ? 1 : 0.5
            }
          }}
          events={{
            data: {
              onClick: this.onClick.bind(this),
              onMouseOver: this.onHover.bind(this)
            }
          }}
        />
      </div>
    );
  }
}

export default Demo;
