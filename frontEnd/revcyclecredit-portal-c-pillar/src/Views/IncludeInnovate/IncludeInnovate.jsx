import React from 'react';

class IncludeInnovate extends React.Component {
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
      someKey: 'Include and Innovate'
    });
  }
}

export default IncludeInnovate;
