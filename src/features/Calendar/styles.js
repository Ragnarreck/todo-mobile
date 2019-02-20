import React from 'react';
import styled from 'styled-components/native';

export const StyledListItemText = styled.Text`
  color: #fff;
  width: 250px;
  font-size: 25px;
  padding-left: 30px;
`;

export const StyledListItem = styled.View`
  height: 100px;
  font-size: 25px;
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
  border-radius: 12px;
  background: #373f57;
  justify-content: space-between;
`;

export const StyledWrapper = styled.View`
  background: #13161f;
`;

export const StyledFlatListWrapper = styled.View`
  height: 42%;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Divider = styled.View`
  border-bottom-width: 3px;
  border-bottom-color: black;
`;

export const ButtonSection = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ActionButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
`;

export const CalendarGlobalStyles = {
  height: '50%',
};

export const CalendarTheme = {
  arrowColor: 'red',
  dayTextColor: '#fff',
  monthTextColor: 'red',
  backgroundColor: '#283046',
  textDisabledColor: '#7c838a',
  calendarBackground: '#283046',
};

export const AddButton = styled.TouchableOpacity`
  width: 65px;
  height: 65px;
  right: 20px;
  bottom: 70px;
  padding: 10px;
  display: flex;
  position: absolute;
  border-radius: 60px;
  align-items: center;
  background: darkorange;
  justify-content: center;
`;

export const Header = styled.View`
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  background: #283046;
`;
