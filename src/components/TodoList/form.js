import React, { Component } from 'react';
// import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
  };

  // nameInputId = shortid.generate();
  // tagInputId = shortid.generate();
  hendelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  hendelSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', tag: '' });
  };
  render() {
    return (
      <form onSubmit={this.hendelSubmit}>
        <label>
          name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hendelChange}
          
          ></input>
        </label>

        <label htmlFor={this.tagInputId}>
          adress
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.hendelChange}
            id={this.tagInputId}
          ></input>
        </label>

        <button type="submit">SEND</button>
        <p>
          <label>
            <input
              type="radio"
              name=" experience"
              value="junior"
              onChange={this.hendelChange}
              checked={this.state.experience === 'junior'}
            ></input>
            junior
          </label>
          <label>
            <input
              type="radio"
              name=" experience"
              value="middle"
              onChange={this.hendelChange}
              checked={this.state.experience === 'middle'}
            ></input>
            middle
          </label>
          <label>
            <input
              type="radio"
              name=" experience"
              value="senior"
              onChange={this.hendelChange}
              checked={this.state.experience === 'senior'}
            ></input>
            senior
          </label>
        </p>
      </form>
    );
  }
}

export default Form;
