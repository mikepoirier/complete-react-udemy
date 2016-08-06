var React = require('react');

var WeatherMessage = ({temp, location}) => {
    var message = 'Search for your city\'s current temperature!';
    if(location.length > 0) {
        message = `It is ${temp} in ${location}.`
    }
    return(
        <h3 className="text-center">{message}</h3>
    )
};

module.exports = WeatherMessage;