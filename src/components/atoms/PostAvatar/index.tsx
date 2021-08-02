import React from 'react';

import { Image, ImageProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

export function PostAvatar({ ...rest }: ImageProps){
  return (
    <Image 
      {...rest}
      style={styles.postAvatar} 
    />
  );
}