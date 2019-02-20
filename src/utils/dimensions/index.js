import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const convertWidthPercentToVirtualPoints = number => (width/100) * number;

export const convertHeightPercentToVirtualPoints = number => (height/100) * number;
