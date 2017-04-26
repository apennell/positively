import React from 'react';
import Affirmation from './Affirmation.jsx';

class AppView extends React.Component {
  render() {
    return (
    	<div>
	      <div className="app-container">
	        <h1>Positively</h1>
	        <Affirmation />
      	</div>

      	<div className="bottom-row">
	      	<div className="container">
		      	<div className="row">
		      		<div className="col-sm-6">
		      			<h4>affirmations by <a href="https://twitter.com/affirmationboss?lang=en" target="_blank">@affirmationboss</a></h4>
		      		</div>

		      		<div className="col-sm-6 text-right">
		      			<h4><a href ="http://anniepennell.com/">Annie Pennell</a> 2017</h4>
		      		</div>
	      		</div>
	      	</div>
      	</div>
      </div>
    );
  }
}

export default AppView;