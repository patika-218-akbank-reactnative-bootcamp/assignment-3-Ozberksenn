import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  seperator: {
    width: Dimensions.get('window').width,
    height: 1,
    backgroundColor: '#1d1d1d',
    left: 60,
  },
});
