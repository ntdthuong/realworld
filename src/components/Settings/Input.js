import React, { Component } from 'react';

export class Input extends Component {
  constructor(props) {
    super(props);
    const { name, placeholder, value, type } = props.fieldInfo;
    this.state = {
      value,
      placeholder,
      name,
      type
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('prev', prevState);
    console.log('next', nextProps)
    if (nextProps.fieldInfo.value !== prevState.value) {
      const { name, value } = prevState.value ? prevState : nextProps.fieldInfo;
      return {
        [name]: value
      };
    }
    return null;
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({value});
  }

  render() {
    const { type, name, placeholder, value } = this.state;
    console.log('value', value)
    return (
      <fieldset className="form-group">
        <input
          className="form-control"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value || ''}
          onChange={this.onChange}
        />
      </fieldset>
    );
  }
}