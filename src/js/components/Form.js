import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
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
        <FormWrapper>
          <Label htmlFor="title">
            Title:
            <Input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </Label>
        </FormWrapper>
        <Button type="submit" className="btn btn-success btn-lg">
          SAVE
        </Button>
      </form>
    );
  }
}

const FormWrapper = styled.div`
  float: left;
`

const Input = styled.input`
  background-color: white;
`

const Label = styled.label`
  display: block;
  padding: 5px;
`

const Button = styled.button`
  margin: 0 10px;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  float: left;
`

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
