var React = require('react');

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var update = {
            name: this.refs.name.value,
            message: this.refs.message.value
        };

        this.refs.name.value = '';
        this.refs.message.value = '';

        this.props.onFormUpdate(update)
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="name" placeholder="Enter Name..."/>
                    </div>
                    <div>
                        <textarea ref="message" placeholder="Enter Message..."/>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = GreeterForm;