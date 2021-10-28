import React, { useContext } from 'react';
import { View, 
        Text, 
        Image,
        } from 'react-native';
        
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../context/auth';

import { createStackNavigator } from '@react-navigation/stack';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './style';

import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background';

export function SignIn({navigation}: {navigation: any}){
    //const navigation = useNavigation();

    const context = useContext(AuthContext);

    function handleSignIn() {
        navigation.navigate('Home');
    }
    
    return(
        <Background>
            <View style={styles.container}>
                
                <Image 
                    source={IllustrationImg}
                    style={styles.image} 
                    resizeMode = "stretch"
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Organize {'\n'} 
                        suas jogatinas {'\n'} 
                        facilmente {'\n'} 
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon 
                        title="Entrar com Discord"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>

            </View>
        </Background>    
    );
}