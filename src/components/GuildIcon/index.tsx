import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {View, Image } from 'react-native';

import { styles } from './style';
import DiscordSvg from '../../assets/discord.svg';


const { CDN_IMAGE } = process.env;

type Props = {
    guildId: string;
    iconId: string | null;

}

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
    
    
    return(
        <View style={styles.container}>
            {
                iconId ?
                <Image 
                source={{ uri }}
                style={styles.image}
                resizeMode="cover"   
                />
                :
                <DiscordSvg 
                    width={40}
                    height={40}
                />    
            }
        </View>
    );
}