var React = require('react');

var WeatherMessage = ({temp, location}) => {
    var message = 'Search for your city\'s current temperature!';
    if(location.length > 0) {
        message = `It is ${temp} in ${location}.`
    }
    return(
        <div>
            <p>{message}</p>
        </div>
    )
};

module.exports = WeatherMessage;