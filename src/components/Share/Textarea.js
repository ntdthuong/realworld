import React, { Component } from 'react';

export class Textarea extends Component {
  render() {
    const { type, name, placeholder, value, rows } = this.props;
    return (
      <fieldset className="form-group">
        <textarea
          className="form-control form-control-lg"
          type={type}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value || ''}
          onChange={this.props.onChange}
        >
        </textarea>
      </fieldset>
    );
  }
}