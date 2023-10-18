import { StyleSheet } from "react-native";

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

    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    prevResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    row: {
       flexDirection: 'row',
       justifyContent: 'center',
       marginBottom: 18,
       paddingHorizontal: 10,
    },
    btn: {
        height:80,
        width: 80,
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