import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './style';

export function Home({navigation}: {navigation: any}) {
    const [category, setCategory] = useState('');

    //const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos  chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    // function handleAppointmentDetails(){
    //     navigation.navigate('AppointmentDetails')
    //     onPress={() => navigation.navigate('Home')}

    // }

    return(
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd />
                </View>

                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                    
                />

                <View style={styles.content}>
                    <ListHeader 
                        title= "Partidas agendadas"
                        subtitle= "Total 6"
                    />

                    <FlatList 
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                        <Appointment 
                            data={item} 
                            onPress={() => navigation.navigate('AppointmentDetails')}
                        />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />    
                </View>        
            </View>
        </Background>
    );
}