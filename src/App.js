import React from 'react';
import Calc from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calc />
    );
  }
}

export default App;
