import React, { Fragment } from 'react';
import R from 'ramda';
import DropdownAlert from 'react-native-dropdownalert';
import { login, signUp } from './utils';
import { Form } from './components/Form/index';
import {
  StyledBody
} from './styles';

export class LoginOrSignUp extends React.Component {
  state = {
    login: '',
    errors: {},
    password: '',
    textSnackBar: '',
    isSignUpPage: false,
    showSnackBar: false,
  };

  changeField = field => ({ nativeEvent: { text } }) => this.setState(state => ({ ...state, [field]: text }));

  errorCallback = err => this.dropdown.alertWithType('error', 'Error', R.path(['response', 'data', 'error'], err));

  onSubmit = () => this.state.isSignUpPage
    ? signUp(R.pick(['login', 'password'], this.state), err => this.errorCallback(err))
    : login(R.pick(['login', 'password'], this.state), err => this.errorCallback(err));

  switchMode = () => this.setState(state => ({
    ...state,
    login: '',
    password: '',
    isSignUpPage: !state.isSignUpPage,
  }));

  render() {
    return (
      <Fragment>
        <StyledBody>
          <Form
            {...this.state}
            onSubmit={this.onSubmit}
            switchMode={this.switchMode}
            onChangeField={this.changeField}
          />
        </StyledBody>
        <DropdownAlert ref={ref => this.dropdown = ref} useNativeDriver />
      </Fragment>
    );
  }
};
