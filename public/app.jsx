var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var name = 'Mike';
var message = 'This is a cool message';

ReactDOM.render(
    <Greeter name={name} message={message}/>,
    document.getElementById('app')
);