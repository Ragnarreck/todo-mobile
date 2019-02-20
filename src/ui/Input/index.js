import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledView, IconWrapper } from './styles';

export const Input = (props) => {
  const { isTextArea, leftIcon, isLightMode } = props;
  return (
    <StyledView>
      <IconWrapper>{leftIcon}</IconWrapper>
      <StyledInput
        autoCapitalize="none"
        multiline={isTextArea}
        isTextArea={isTextArea}
        showLeftIcon={leftIcon}
        transparent="transparent"
        isLightMode={isLightMode}
        placeholderTextColor="#959798"
        numberOfLines={isTextArea ? 5 : 1}
        {...props}
      >
      </StyledInput>
    </StyledView>
  );
};

Input.propTypes = {
  isTextArea: PropTypes.bool,
  isLightMode: PropTypes.bool,
  leftIcon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Input.defaultProps = {
  isTextArea: false,
  isLightMode: false,
  leftIcon: null
};
