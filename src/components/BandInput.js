// Add BandInput component
import React, { Component } from "react";
import { addBand } from "../actions/band";
import { connect } from "react-redux";
class BandInput extends Component {
  state = {
    name: "",
  };

  handleNameOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
  };
  render() {
    return (
      <div>
        Band Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleNameOnChange(event)}
            id="name"
            placeholder="Enter Band Name"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBand: (formData) => dispatch({ type: "ADD_BAND", band: formData }),
});

export default connect(null, mapDispatchToProps)(BandInput);
