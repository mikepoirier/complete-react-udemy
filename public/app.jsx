var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello, {name}!</h1>
                <p>{message}</p>
            </div>
        )
    }
});

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

var name = 'Mike';
var message = 'This is a cool message';

ReactDOM.render(
    <Greeter name={name} message={message}/>,
    document.getElementById('app')
);