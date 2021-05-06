import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelSearch } from "../redux/actions/search";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li onClick={() => this.props.cancelSearch()}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => this.props.cancelSearch()}>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default connect(null, { cancelSearch })(NavBar);