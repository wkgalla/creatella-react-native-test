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
        height: '100%',
        width: '100%'
    },
    cardContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 8,
        height: '100%'
    },
    faceContainer: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    price: {
        color: 'yellowgreen'
    }
});