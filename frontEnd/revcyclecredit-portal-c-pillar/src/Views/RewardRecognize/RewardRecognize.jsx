import React from 'react';

class RewardRecognize extends React.Component {
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
      someKey: 'Reward and Recognize'
    });
  }
}

export default RewardRecognize;
