import React from 'react';

class EducateEmpower extends React.Component {
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
      someKey: 'Educate and Empower'
    });
  }
}

export default EducateEmpower;
