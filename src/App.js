import React from 'react';

import Header from './Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
      </>
    );
  }
}

export default App;
