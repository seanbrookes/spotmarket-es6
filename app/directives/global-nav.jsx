const React = require('react');

class GlobalNav extends React.Component {
  render() {
    return (
      <nav className="GlobalNav Layout">
        <div>
          <div className="Layout">
            <button className="CommandButton" >login handle</button>
            <button className="CommandButton" >Logout</button>
          </div>
          <div  className="Layout">
            <button className="CommandButton" >Login</button>
            <button className="CommandButton" >Register</button>
          </div>
        </div>
      </nav>

    );
  }
}

export default GlobalNav;









