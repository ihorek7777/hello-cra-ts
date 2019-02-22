import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register({
  onSuccess(registration) {
    window.console.log('Success: ', registration);
  },
  onUpdate(registration) {
    window.console.log('Update: ', registration);
  },
});
