var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        var searchLocation = this.props.searchLocation;
        var message = searchLocation.length > 0
            ? 'You searched for ' + searchLocation + '.'
            : '';

        return(
            <div>
                <p>{message}</p>
            </div>
        )
    }
});

module.exports = WeatherMessage;