import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

type Props = TextProps & {
  value: string;
}

export function PostLiked({ value }: Props){
  return (
  <Text style={styles.likes}>
    {value}
  </Text>
  );
}