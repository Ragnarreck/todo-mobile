import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledPrimaryButton,
  StyledPrimaryButtonText
} from './styles';

export const PrimaryButton = (props) => {
  const { title } = props;
  return (
    <StyledPrimaryButton {...props}>
      <StyledPrimaryButtonText>
        {title}
      </StyledPrimaryButtonText>
    </StyledPrimaryButton>
  );
}

PrimaryButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

PrimaryButton.defaultProps = {
  title: '',
  onPress: () => null
};
