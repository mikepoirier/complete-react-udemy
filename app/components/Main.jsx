var React = require('react');
var Nav = require('./Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div>Main.jsx rendered</div>
      </div>
    </div>
  );
};

module.exports = Main;
