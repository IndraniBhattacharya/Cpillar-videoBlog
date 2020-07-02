import React from 'react';

class DeliverDelight extends React.Component {
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
      someKey: 'Deliver and Delight'
    });
  }
}

export default DeliverDelight;
