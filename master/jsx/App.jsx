import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Test 123 adsds</h1>
      </div>
    );
  }
}

export default App;

ReactDOM.render((
  <App />
), document.getElementById('app'));