const React = require('react');

import UserContactInput from './user-contact-input.jsx';

class HomeContent extends React.Component {
  render() {
    return (
      <div>
        <div className="HomeHeroContainer Column FlexEnd CenterItems">
          <div className="Column CenterItems">
            <p className="HomeHeroContainer__MainBlobQuote">Brewers!</p>
            <p className="HomeHeroContainer__MainBlob">Source quality local hops with ease and confidence.</p>
          </div>
          <div className="HomeHero__Contact Layout Center">
            <UserContactInput></UserContactInput>
          </div>
        </div>
        <div className="HomeSecondary__Container Layout Spaced Flow">
          <div className="HomeSecondary__SubContainer">
            <h2 className="HomeSecondary__Heading">Brewers</h2>
            <p className="HomeSecondary__Blurb">Find local hop farmers producing the variaties you're looking for</p>
            <ul className="HomeSecondary__FeatureList">
              <li className="HomeSecondary__FeatureListItem">Instant awareness of producers local to you</li>
              <li className="HomeSecondary__FeatureListItem">Communication and procurement history for future reference</li>
              <li className="HomeSecondary__FeatureListItem">Wishlist to signal demand or request for vendors</li>
            </ul>
          </div>
          <div className="HomeSecondary__SubContainer">
            <h2 className="HomeSecondary__Heading">Hop Producers</h2>
            <p className="HomeSecondary__Blurb">Post up a profile of your hop yard, where you are and what you are growing and selling</p>
            <ul className="HomeSecondary__FeatureList">
              <li className="HomeSecondary__FeatureListItem">Storefront to promote your brand and even process payments</li>
              <li className="HomeSecondary__FeatureListItem">Easy to maintain dynamic inventory and availability information</li>
              <li className="HomeSecondary__FeatureListItem">Broadcast updates to your followers</li>
            </ul>
          </div>

        </div>
      </div>

    );
  }
}

export default HomeContent;
















