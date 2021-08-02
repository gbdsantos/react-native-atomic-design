import React from 'react';
import { ImageProps, View } from 'react-native';

import { PostLiked } from '../../atoms/PostLiked';
import { PostLikedAvatar } from '../../atoms/PostLikedAvatar';

import { styles } from './styles';

type Props = {
  avatar: ImageProps;
  likes: string;
}

export function PostAbout({ avatar, likes } :Props){
  return (
    <View style={styles.postAbout}>
    <PostLikedAvatar source={avatar} />
    <PostLiked value={likes} />
  </View>
  );
}