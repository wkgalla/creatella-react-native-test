import {
    StyleSheet,
    Dimensions
  } from 'react-native';
  
export default StyleSheet.create({
    item: {
        height: Dimensions.get('window').width / 2,
        width: '50%',
        padding: 4,
    },
    face: {
        alignSelf: "center",
        paddingVertical: 14
    },
    price: {
        color: 'yellowgreen'
    }
});