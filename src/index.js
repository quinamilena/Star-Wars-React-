import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';

import icon from './img/favicon.ico';

const newLink = document.createElement('link')
newLink.rel = 'shortcut icon'
newLink.href = icon
document.querySelector('head').appendChild(newLink)

ReactDOM.render(<Routes />, document.getElementById('cont'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
