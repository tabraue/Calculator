import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/theme';

interface Props {
  text: string;
  bgcolor?: string;
  big?: boolean;
  action: (number: string) => void;
}

const ButtonCalc = ({ text, bgcolor = '#2D2D2D', big = false, action }: Props) => {
  return (
    <TouchableOpacity onPress={ () => action(text) }>
    <View
      style={{
        ...styles.btn,
        backgroundColor: bgcolor,
        width: big ? 180 : 80
      }}>
      <Text
        style={{
          ...styles.btnTxt,
          color: bgcolor === '#9B9B9B' ? 'black' : 'white',
        }}>
        {text}
      </Text>
    </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;

//#2D2D2D  #FF9427
