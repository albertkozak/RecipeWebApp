import React, { Component } from "react";
class Logout extends Component {
  render() {
    sessionStorage.clear();
    window.location.reload(false);
    this.props.history.push("/");
    return <div className="reg-form">loggedOut</div>;
  }
}
export default Logout;
