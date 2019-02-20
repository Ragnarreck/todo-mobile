import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Input } from '../../../../ui/Input';
import { PrimaryButton } from '../../../../ui/PrimaryButton';
import { SecondaryButton } from '../../../../ui/SecondaryButton';
import {
  StyledFormNote,
  StyledFormTitle,
  StyledFormSection,
  StyledInputWrapper,
  StyledFormNoteText,
  StyledButtonWrapper,
  StyledFormNoteLinkText,
} from './styles';

export const Form = ({
                       login,
                       onSubmit,
                       password,
                       switchMode,
                       isSignUpPage,
                       onChangeField,
                     }) => (
  <StyledFormSection>

    <StyledFormTitle>
      {isSignUpPage ? 'Who are you?' : 'Login'}
    </StyledFormTitle>

    <StyledInputWrapper>
      <Input
        placeholder="Username"
        value={login}
        onChange={onChangeField('login')}
        leftIcon={<Icon name="user" color="#a0100f" size={30} />}
      />
    </StyledInputWrapper>

    <StyledInputWrapper>
      <Input
        placeholder="Password"
        value={password}
        onChange={onChangeField('password')}
        leftIcon={<Icon name="lock" color="#a0100f" size={30} />}
      />
    </StyledInputWrapper>

    <StyledButtonWrapper>
      <PrimaryButton title={isSignUpPage ? 'Sign up' : 'Login'} onPress={onSubmit} />
    </StyledButtonWrapper>

    <StyledFormNote>
      <StyledFormNoteText>
        {isSignUpPage ? 'Already have an account?' : 'Don\'t have an account?'}
      </StyledFormNoteText>
      <TouchableOpacity onPress={switchMode}>
        <StyledFormNoteLinkText>
          {isSignUpPage ? 'Login here' : 'Sign up'}
        </StyledFormNoteLinkText>
      </TouchableOpacity>
    </StyledFormNote>

  </StyledFormSection>
);

Form.propTypes = {
  isSignUpPage: PropTypes.bool,
  login: PropTypes.string.isRequired,
  switchMode: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
};

Form.defaultProps = {
  isSignUpPage: false
};
