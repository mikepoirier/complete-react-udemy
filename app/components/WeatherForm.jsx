var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var search = this.refs.search.value;
        if(search.length > 0) {
            this.refs.search.value = '';
            this.props.onFormUpdate(search);
        }
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" placeholder="Enter City, State" ref="search"/>
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;