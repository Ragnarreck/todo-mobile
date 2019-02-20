import { AsyncStorage } from 'react-native';

export const getAsyncStorageItem = async(key) => {
  return await AsyncStorage.getItem(key);
};
