import React from 'react';
import Affirmation from './Affirmation.jsx';

class AppView extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1>Positively</h1>
        <Affirmation />
      </div>
    );
  }
}

export default AppView;