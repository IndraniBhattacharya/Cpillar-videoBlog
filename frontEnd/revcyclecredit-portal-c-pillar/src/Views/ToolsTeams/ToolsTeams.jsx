import React from 'react';

class ToolsTeams extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'Tools and Teams'
    });
  }
}

export default ToolsTeams;
