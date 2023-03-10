import React, { Component } from 'react';

export class Filter extends Component {

    zxc = (e) => {
        const value = e.currentTarget.value;
        this.props.onChange(value);
    }
  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" onChange={this.zxc} />
      </>
    );
  }
}
export default Filter;
