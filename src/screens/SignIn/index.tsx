import React from 'react';
import { View, 
        Text, 
        Image,
        Alert,
        ActivityIndicator
        } from 'react-native';
        
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import { createStackNavigator } from '@react-navigation/stack';

import IllustrationImg from '../../assets/illustration.png';
import { theme } from '../../../global/styles/theme';
import { styles } from './style';

import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background';

export function SignIn({navigation}: {navigation: any}){
    //const navigation = useNavigation();

    const { loading, signIn} = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert('error');
        }
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

                    {
                        loading ? <ActivityIndicator color={theme.colors.primary} />
                        :
                        <ButtonIcon 
                            title="Entrar com Discord"
                            onPress={handleSignIn}
                        />
                    }
                </View>
            </View>
        </Background>    
    );
}