import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import uuidvl from 'uuid';
import { addArticle } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article)),
});

class ConnectedForm extends PureComponent {
  state = {
    title: '',
  };


  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidvl();
    this.props.addArticle({ title, id });
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">
            Title
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
