import moment from 'moment';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { request } from '../../../utils/request/index';

export const getAllNotes = () => AsyncStorage
  .getItem('USER_ID')
  .then(userId => request.get(`/notes/user/${userId}`));

export const getNotesByDate = (date) => AsyncStorage
  .getItem('USER_ID')
  .then(userId => request.get(`/notes/user/${userId}/${date}`));

export const createNote = async (values) => {
  const userId = await AsyncStorage.getItem('USER_ID');
  const date = moment(values.date).format('DD-MM-YYYY');
  return request.post('/note', { ...values, creatorId: userId, date });
};

export const editNote = note => request.put(`/note/${note._id}`, note);

export const removeNote = note => request.delete(`/note/${note._id}`);

export const logout = () => {
  AsyncStorage.clear();
  Actions.loginOrSignUp();
};
