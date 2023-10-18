import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;

// Global Styles => 1 theme

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        marginHorizontal: 10
    },
    prevResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    row: {
       flexDirection: 'row',
       justifyContent: 'center',
       marginBottom: 18,
       paddingHorizontal: 10,
       marginHorizontal: 10
    },
    btn: {
        height: windowWidth*0.2,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    btnTxt: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '400',
    },

});