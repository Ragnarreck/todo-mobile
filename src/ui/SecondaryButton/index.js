import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {
  StyledPrimaryButton,
  StyledPrimaryButtonText
} from './styles';

export const SecondaryButton = (props) => {
  const { title } = props;
  return (
    <StyledPrimaryButton {...props}>
      <StyledPrimaryButtonText>
        {title}
      </StyledPrimaryButtonText>
    </StyledPrimaryButton>
  );
}

SecondaryButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

SecondaryButton.defaultProps = {
  title: '',
  onPress: () => null
};
