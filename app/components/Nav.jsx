var React = require('react');
var {IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();

    var {location} = this.refs;
    var encodedLocation = encodeURIComponent(location.value);

    if(encodedLocation.length > 0) {
      this.refs.location.value = '';
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  },

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">App Name</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <div>Right side stuff</div>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
