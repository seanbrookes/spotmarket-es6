const React = require('react');
import MainNav from './main-nav.jsx';
import GlobalNav from './global-nav.jsx';

class PageHeader extends React.Component {
  render() {
    return (
      <header className="PageHeader Layout Spread">
        <div className="Branding Layout AlignCenter">
          <a href="/" title="Spotmarket home">
            <img src="images/logo.png" alt="logo" className="logo" />
          </a>
          <p className="Title__Tag Layout"><span className="Title__Tag--spot">spot</span><span className="Title__Tag--market">market</span></p>
        </div>
        <div className="Title">
          <p className="Title__SubTitle">farmer direct marketplace</p>
        </div>
        <div className="BaseMainNav Column FlexEnd">
          <MainNav></MainNav>
        </div>
        <GlobalNav></GlobalNav>
      </header>

    );
  }
}

export default PageHeader;
