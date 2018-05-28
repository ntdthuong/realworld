import React, { Component } from 'react';

export class Textarea extends Component {
  render() {
    return (
      <fieldset className="form-group">
        <textarea
          className="form-control form-control-lg"
          rows="8"
          name='bio'
          placeholder="Short bio about you"
          value=''
        ></textarea>
      </fieldset>
    );
  }
}