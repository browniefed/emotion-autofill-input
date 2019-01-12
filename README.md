# emotion-autofill-input

> Autofill detection with emotion and react

[![NPM](https://img.shields.io/npm/v/emotion-autofill-input.svg)](https://www.npmjs.com/package/emotion-autofill-input)

## Install

```bash
yarn add emotion-autofill-input

// or

npm install --save emotion-autofill-input
```

## Usage

```tsx
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

```

## License

MIT © [browniefed](https://github.com/browniefed)
