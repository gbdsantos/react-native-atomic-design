import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

type Props = TextProps & {
  value: string;
}

export function PostDescription({ value }: Props){
  return (
  <Text style={styles.description}>
    {value}
  </Text>
  );
}