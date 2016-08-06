var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return(
        <div>
            <h2>Nav</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
            <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
        </div>
    )
}

module.exports = Nav;
