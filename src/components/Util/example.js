// this is an example of how to conditionaly require a package on the client only

let mapLib;

export default class SomePage extends React.Component {
  constructor () {
    super();
    this.state = { showMap: false };
  }
  componentDidMount () {
    mapLib = require('some-map-library');
    this.setState({ showMap: true });
  }
  render () {
    return (
      <div>
        {
          this.state.showMap ? (some sort of map thing) : "Loading map"
        }
      </div>
    );
  }
}
