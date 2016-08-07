var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main');
var Countdown = require('./components/Countdown');
var Timer = require('./components/Timer');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App styles (using alias in webpack.config.js)
require('style!css!sass!appStyle');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Route path="countdown" component={Countdown}/>
          <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.getElementById('app')
);