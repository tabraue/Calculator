import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/theme';
import ButtonCalc from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    prevNumber,
    number,
    operator,
    clean,
    doNumber,
    positiveOrNegative,
    deleteLastNum,
    divideBtn,
    multiplyBtn,
    subtractBtn,
    addBtn,
    resultBtn
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.prevResult}>{prevNumber} {operator}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalc action={clean} text="C" bgcolor="#9B9B9B" />
        <ButtonCalc action={positiveOrNegative} text="+/-" bgcolor="#9B9B9B" />
        <ButtonCalc action={deleteLastNum} text="del" bgcolor="#9B9B9B" />
        <ButtonCalc action={divideBtn} text="/" bgcolor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc action={doNumber} text="7" />
        <ButtonCalc action={doNumber} text="8" />
        <ButtonCalc action={doNumber} text="9" />
        <ButtonCalc action={multiplyBtn} text="x" bgcolor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc action={doNumber} text="4" />
        <ButtonCalc action={doNumber} text="5" />
        <ButtonCalc action={doNumber} text="6" />
        <ButtonCalc action={subtractBtn} text="-" bgcolor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc action={doNumber} text="1" />
        <ButtonCalc action={doNumber} text="2" />
        <ButtonCalc action={doNumber} text="3" />
        <ButtonCalc action={addBtn} text="+" bgcolor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc action={doNumber} text="0" big />
        <ButtonCalc action={doNumber} text="." />
        <ButtonCalc action={resultBtn} text="=" bgcolor="#FF9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
