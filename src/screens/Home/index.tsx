import React from 'react';
import { View } from 'react-native';
import { Profile } from '../../components/Profile';

import { styles } from './style';

export function Home() {
    return(
        <View>
            <View style={styles.header}>
                <Profile />
            </View>
        </View>
    );
}