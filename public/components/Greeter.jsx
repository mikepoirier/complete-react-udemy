var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is a default message'
        };
    },

    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    handleFormUpdate: function (update) {
        this.setState({
            name: update.name.length > 0 ? update.name : this.props.name,
            message: update.message.length > 0 ? update.message : this.props.message
        });
    },

    render: function () {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onFormUpdate={this.handleFormUpdate}/>
            </div>
        );
    }
});

module.exports = Greeter;