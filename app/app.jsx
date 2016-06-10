var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
    name: 'Mike',
    location: 'Denver'
};

var objTwo = {
    age: 24,
    ...objOne
};

console.log(objTwo);

ReactDOM.render(
    <h1>Boilerplate App!</h1>,
    document.getElementById('app')
);