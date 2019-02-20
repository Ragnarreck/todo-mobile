import styled from 'styled-components/native';
import { convertWidthPercentToVirtualPoints } from '../../utils/dimensions/index';

export const StyledPrimaryButton = styled.TouchableOpacity`
  height: 35px;
  align-items: center;
  border-radius: 35px;
  justify-content: center;
  background: ${props => props.isLightMode ? 'darkgray' : 'lightcoral'};
  width: ${props => props.width || convertWidthPercentToVirtualPoints(70)};
`;

export const StyledPrimaryButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
