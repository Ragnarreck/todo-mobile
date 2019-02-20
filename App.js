import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { LoginOrSignUp } from './src/features/LoginOrSignUp';
import { Calendar } from './src/features/Calendar';

export default () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          initial
          hideNavBar
          key="loginOrSignUp"
          component={LoginOrSignUp}
        />
        <Scene
          hideNavBar
          key="calendar"
          component={Calendar}
        />
      </Stack>
    </Router>
  );
}
