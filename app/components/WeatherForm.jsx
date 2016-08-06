var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location;
    var search = location.value;
    if (search.length > 0) {
      location.value = '';
      this.props.onFormUpdate(search);
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Search weather by city" ref="location"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;