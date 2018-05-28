import React, { Component } from 'react';

export class Input extends Component {
  render() {
    const { type, name, placeholder, value } = this.props;
    return (
      <fieldset className="form-group">
        <input
          className="form-control"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value || ''}
          onChange={this.props.onChange}
        />
      </fieldset>
    );
  }
}