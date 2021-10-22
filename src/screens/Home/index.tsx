import React from 'react';
import { View } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';

import { styles } from './style';

export function Home() {
    return(
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd />
                </View>

                <View>
                    <CategorySelect />    
                </View>
            </View>
        </Background>
    );
}