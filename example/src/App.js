import React, { Component } from "react";

import AutofillInput from "emotion-autofill-input";

export default class App extends Component {
  state = {
    value: "",
  };
  render() {
    return (
      <div>
        <AutofillInput
          value={this.state.value}
          onChange={e => {
            this.setState({ value: e.target.value })
            console.log(e.target.value);
          }}
          name="name"
          onAutoFill={filled => console.log(filled)}
        />
      </div>
    );
  }
}
