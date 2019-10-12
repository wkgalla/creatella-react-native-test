import {
    StyleSheet,
    Dimensions
  } from 'react-native';
  
export default StyleSheet.create({
    container: {
        height: Dimensions.get('window').width / 2,
        width: '50%',
        padding: 4,
    },
    card: {
        width: '100%',
        height: '100%',
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    spinner: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    }
});