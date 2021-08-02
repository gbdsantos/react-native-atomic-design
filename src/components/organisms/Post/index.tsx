import React from 'react';
import { ImageProps, View } from 'react-native';

import { PostPhoto } from '../../atoms/PostPhoto';
import { PostHeader } from '../../molecules/PostHeader';
import { PostOptions } from '../../molecules/PostOptions';
import { PostAbout } from '../../molecules/PostAbout';
import { PostDescription } from '../../atoms/PostDescription';

import { styles } from './styles';

type Profile = {
  id: string;
  name: string;
  avatar: ImageProps;
}

export type PostProps = {
  id: string;
  username: string;
  location: string;
  likes: string;
  cover: ImageProps;
  description: string;
  lastLiked: Profile;
}

type Props = {
  data: PostProps;
}

export function Post({ data }: Props){
  return (
    <View style={styles.post}>
        <PostHeader 
          username={data.username}
          location={data.location}
        />
        
        <PostPhoto source={data.cover} />
        
        <View style={styles.postFooter}>
          <PostOptions />
          <PostAbout 
            avatar={data.lastLiked.avatar}
            likes={data.likes}
          />

          <PostDescription value={data.description}/> 
        </View>
    </View>
  );
}