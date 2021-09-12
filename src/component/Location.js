import React, { Component } from "react";

export class Location extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>
          {this.props.lon} / {this.props.lat}
        </h2>
        <h2>{this.props.type}</h2>
        <img
          src={this.props.imgURL}
          alt="Girl in a jacket"
          width="500"
          height="600"
        />
      </div>
    );
  }
}

export default Location;
