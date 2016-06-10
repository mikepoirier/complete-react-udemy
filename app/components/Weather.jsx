var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');

var Weather = React.createClass({
    getDefaultProps: function () {
        return {
            search: ''
        }
    },

    getInitialState: function () {
        return {
            search: this.props.search
        }
    },

    handleFormUpdate: function (search) {
        this.setState({
            search: search
        });
    },

    render: function () {
        var search = this.state.search;
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onFormUpdate={this.handleFormUpdate}/>
                <WeatherMessage searchLocation={search}/>
            </div>
        )
    }
});

module.exports = Weather;