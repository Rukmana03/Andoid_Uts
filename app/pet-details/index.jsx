import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import PetInfo from '../../components/PetDetails/PetInfo';
import { ScrollView } from 'react-native';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';

export default function PetDetails() {
    const pet = useLocalSearchParams();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
        });
    }, [navigation]); // Tambahkan 'navigation' sebagai dependensi

    return (
        <View>
            <ScrollView>
            {/* Pet Info */}
                <PetInfo pet={pet}/>
            {/* Pet Properties */}
                <PetSubInfo pet={pet}/>
            {/* About */}
                <AboutPet pet={pet}/>
            {/* Email */}
                <OwnerInfo pet={pet} />
                <View style={{height:70}}>
                    
                </View>
            </ScrollView>
            {/* Adopt Me */}
        </View>
    );
}
