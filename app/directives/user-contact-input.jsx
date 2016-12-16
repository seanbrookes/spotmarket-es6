const React = require('react');

class UserContactInput extends React.Component {
  render() {
    return (
    <div className="ContactInput">
      <div>
        <label className="ContactInput__Label">For early access or to learn more drop us your email and we'll set you up</label>
        <label className="ContactInput__Label">Thank you, we'll be in touch</label>
        <form>
          <span className="ContactInput__ValidationMessage">Oops that does not seem to be a valid email. Please try again</span>
          <input type="text"
                 className="ContactInput__Input"
                 placeholder="email address"
                  />
          <button className="Button--primary">Learn more</button>
        </form>
      </div>
      <div className="Column CenterItems">

        <label className="ContactInput__Label--twitter">Follow us on twitter @thespotmarket</label>
        <a href="https://twitter.com/thespotmarket" className="twitter-follow-button" data-show-count="false">Follow @thespotmarket</a><script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
    </div>


    );
  }
}

export default UserContactInput;