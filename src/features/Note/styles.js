import styled from 'styled-components/native';
import { convertHeightPercentToVirtualPoints } from '../../utils/dimensions/index';

export const Wrapper = styled.View`
  display: flex;
  background: #283046;
  align-items: center;
  justify-content: center;
  height: ${convertHeightPercentToVirtualPoints(100)};
`;

export const InputWrapper = styled.View`
  margin-top: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 25px;
  margin-bottom: 20px;
`;

export const ButtonSection = styled.View`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
`;

export const ButtonWrapper = styled.View`
  margin-left: 10px;
`;
