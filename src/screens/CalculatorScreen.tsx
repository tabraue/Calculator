import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/theme';
import ButtonCalc from '../components/ButtonCalc';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
        <Text style={styles.prevResult}>1,500.00</Text>
        <Text style={styles.result}>1,500.00</Text>
        <View style={styles.row}>
            <ButtonCalc text='C' bgcolor='#9B9B9B'/>
            <ButtonCalc text='+/-' bgcolor='#9B9B9B'/>
            <ButtonCalc text='del' bgcolor='#9B9B9B'/>
            <ButtonCalc text='/' bgcolor='#FF9427'/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text='7'/>
            <ButtonCalc text='8'/>
            <ButtonCalc text='9'/>
            <ButtonCalc text='x' bgcolor='#FF9427'/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text='4'/>
            <ButtonCalc text='5'/>
            <ButtonCalc text='6'/>
            <ButtonCalc text='-' bgcolor='#FF9427'/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text='1'/>
            <ButtonCalc text='2'/>
            <ButtonCalc text='3'/>
            <ButtonCalc text='+' bgcolor='#FF9427'/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text='0' big/>
            <ButtonCalc text='.'/>
            <ButtonCalc text='=' bgcolor='#FF9427'/>
        </View>
    </View>
  )
}

export default CalculatorScreen

