var React = require('react');
var {Link} = require('react-router');

const getLocationPath = (location) =>
  `/?location=${encodeURIComponent(location)}`;

var Examples = (props) => {
  var denver = 'Denver, CO';
  var rio = 'Rio, Brazil';

  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to={getLocationPath(denver)}>{denver}</Link>
        </li>
        <li>
          <Link to={getLocationPath(rio)}>{rio}</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;