const React = require('react');

class MainNav extends React.Component {
  render() {
    return (
      <div className="Layout">
        <button className="MainNavViewButton MainNavViewButton--home" data-name="WelcomeView">Welcome</button>
        <button className="MainNavViewButton" data-name="MarketView">For sale</button>
        <button className="MainNavViewButton" data-name="AskView">Sellers</button>
        <button className="MainNavViewButton" data-name="GeoView">Location</button>
        <button className="MainNavViewButton" data-name="UserProfileView">Profiles</button>
        <button className="MainNavViewButton" data-name="OrgView">Orgs</button>
        <button className="MainNavViewButton" data-name="AboutView">About</button>
      </div>

    );
  }
}

export default MainNav;
