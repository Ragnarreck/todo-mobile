import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { request } from '../../utils/request/index';

export const login = (values, errorCallback) => request
  .post('/login', values)
  .then(resp => {
    AsyncStorage.setItem('USER_ID', resp.data);
    Actions.calendar();
  })
  .catch(errorCallback);

export const signUp = (values, errorCallback) => request
  .post('/users', values)
  .then(({ data: { _id } }) => {
    AsyncStorage.setItem('USER_ID', _id);
    Actions.calendar();
  })
  .catch(errorCallback);
