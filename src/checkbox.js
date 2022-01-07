import React, { PureComponent } from "react";

export default class checkbox extends PureComponent {
  render() {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  }
}
