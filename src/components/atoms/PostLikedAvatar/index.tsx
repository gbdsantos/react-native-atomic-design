import React from 'react';
import { Image, ImageProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

export function PostLikedAvatar({ ...rest }: ImageProps){
  return (
    <Image 
      {...rest}
      style={styles.lastLiked} 
    />
  );
}