import React, { Component } from "react";
import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    let bands = this.props.bands.map((band, index) => (
      <li key={index}>{band.name}</li>
    ));
    return (
      <div>
        <ul>{bands}</ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { bands: state.bands };
};

export default connect(mapStateToProps)(BandsContainer);
