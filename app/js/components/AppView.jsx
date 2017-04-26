import React from 'react';
import Affirmation from './Affirmation.jsx';

export default class AppView extends React.Component {
  render() {
    return (
      <div>
        <h1>Positively</h1>
        <Affirmation />
      </div>
    );
  }
}
