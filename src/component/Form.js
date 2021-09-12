import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.submitHandler}>
          <input type="text" onChange={this.props.handlerName} />
          <input type="submit" value="Explore" />
        </form>
      </>
    );
  }
}

export default Form;
