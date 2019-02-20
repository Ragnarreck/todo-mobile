import styled from 'styled-components/native';
import { convertWidthPercentToVirtualPoints } from '../../utils/dimensions/index';

export const StyledInput = styled.TextInput`
  font-size: 20px;
  padding-right: 10px;
  height: ${props => props.isTextArea ? 200 : 50};
  width: ${convertWidthPercentToVirtualPoints(80)};
  padding-left: ${props => props.showLeftIcon ? 50 : 20};
  color: ${props => props.isLightMode ? '#000' : '#fff'};
  border-radius: ${props => props.isTextArea ? '25px' : '50px'};
  border: ${props => !props.isLightMode && '2px solid #a0100f'};
  background: ${props => props.isLightMode ? '#FFF' : '#283046'};
`;

export const StyledView = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const IconWrapper = styled.View`
  top: 12px;
  left: 40px;
  z-index: 1;
  position: relative;
`;
