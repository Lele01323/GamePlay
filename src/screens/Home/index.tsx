import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Load } from '../../components/Load';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';

export function Home({navigation}: {navigation: any}) {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    //const navigation = useNavigation();

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    async function loadAppointments(){
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if(category){
            setAppointments(storage.filter(item => item.category === category));
        }else{
            setAppointments(storage)
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    },[category]));

    // function handleAppointmentDetails(){
    //     navigation.navigate('AppointmentDetails')
    //     onPress={() => navigation.navigate('Home')}
    // }

    return(
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd onPress={() => navigation.navigate('AppointmentCreate')}/>
                </View>

                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                    
                />

                {
                    loading ? <Load  /> :
                    <>
                        <ListHeader 
                            title= "Partidas agendadas"
                            subtitle= {`Total ${appointments.length}`}
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
                            contentContainerStyle={{ paddingBottom: 69 }}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}    
                        /> 
                    </>  
                }   
            </View>
        </Background>
    );
}