import React from 'react';
import Calculate from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculate />
    );
  }
}

export default App;
