import axios from "axios";
import React, { Component } from "react";
import Form from "./component/Form";
import Location from "./component/Location";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lon: "",
      lat: "",
      type: "",
      showData: false,
    };
  }
  handlerName = (e) => {
    let name = e.target.value;
    this.setState({
      name: name,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let confing = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.name}`,
    };
    axios(confing).then((res) => {
      let firstLOcation = res.data[0];
      this.setState({
        name: firstLOcation.display_name,
        lon: firstLOcation.lon,
        lat: firstLOcation.lat,
        type: firstLOcation.type,
        showData: true,
      });
    });
  };

  render() {
    return (
      <div>
        <Form
          handlerName={this.handlerName}
          submitHandler={this.submitHandler}
        />
        {this.state.showData && (
          <Location
            name={this.state.name}
            lon={this.state.lon}
            lat={this.state.lat}
            type={this.state.type}
          />
        )}
      </div>
    );
  }
}

export default App;
