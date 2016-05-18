VictorySunburst
===========================

<Add high level description here>

## Features

### Props are optional

VictorySunburst is written to be highly configurable, but it also includes a set of sensible defaults and fallbacks. If no props are provided, VictorySunburst <add description of default behavior here>.

```playground
<VictorySunburst />
```

To display your own data, just pass in <describe data requirements>.

```playground
 <VictorySunburst
    data={[]}
 />
```

### Flexible and configurable

The sensible defaults VictorySunburst provides makes it easy to get started, but everything can be overridden, and configured to suit your needs:

Add labels, style the data, <etc, etc.>::

```playground
<VictorySunburst

 />
```

### Animating

VictorySunburst animates with [VictoryAnimation](http://github.com/formidablelabs/victory-animation) as data changes when an `animate` prop is provided.

```playground_norender
class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      style: this.getStyles()
    };
  }

  getStyles() {
    const colors = [
      "red", "orange", "magenta",
      "gold", "blue", "purple"
    ];
    return {
      stroke: colors[_.random(0, 5)],
      strokeWidth: _.random(1, 5)
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        style: this.getStyles()
      });
    }, 3000);
  }

  render() {
    return (
      <VictorySunburst
        style={{data: this.state.style}}
        animate={{velocity: 0.02}}
      />
    );
  }
}
ReactDOM.render(<App/>, mountNode);

```
