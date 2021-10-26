import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Image } from 'react-native';

import { styles } from './style';

export function GuildIcon() {
    const uri = 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpeg';
    return(
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"   
        />

    );
}