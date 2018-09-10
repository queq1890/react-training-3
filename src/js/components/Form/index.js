import React, { PureComponent } from 'react';
import uuidvl from 'uuid';
import { FormattedMessage } from 'react-intl';
import {
  FormWrapper, InputWrapper, Input, Label, Button,
} from './style';

class Form extends PureComponent {
  state = {
    title: '',
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidvl();
    this.props.addArticle({ title, id });
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;
    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <InputWrapper>
          <Label htmlFor="title">
            <FormattedMessage id="article.title" />
            <Input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </Label>
        </InputWrapper>
        <Button type="submit" className="btn btn-success btn-lg">
          SAVE
        </Button>
      </FormWrapper>
    );
  }
}

export default Form;
