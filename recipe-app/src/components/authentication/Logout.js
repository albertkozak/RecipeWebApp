import React, { Component } from "react";
class Logout extends Component {
  componentDidMount() {
    sessionStorage.clear();
    window.location.reload(false);
  }
  render() {
    return <div className="reg-form">loggedOut</div>;
  }
}
export default Logout;
