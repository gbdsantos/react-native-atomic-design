import React from 'react';
import { Image, ImageProps } from 'react-native';

import { styles } from './styles';

export function PostAvatar({ ...rest }: ImageProps){
  return (
    <Image 
      {...rest}
      style={styles.postAvatar} 
    />
  );
}