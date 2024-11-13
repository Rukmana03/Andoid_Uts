import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Category from './Category';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './../../config/FirebaseConfig';
import PetListItem from './PetListItem';

export default function PetListByCategory() {
    const [petList, setPetList] = useState([]);

    useEffect(() => {
        GetPetList('Fish');
    }, []);

    const GetPetList = async (category) => {
        try {
            setPetList([]); // Memastikan state di-reset sebelum mengisi data baru
            const q = query(collection(db, 'Pets'), where('category', '==', category));
            const querySnapshot = await getDocs(q);
            const pets = [];

            querySnapshot.forEach((doc) => {
                pets.push({ ...doc.data(), id: doc.id }); // Menyertakan id dokumen untuk digunakan sebagai key
            });

            setPetList(pets); // Menyimpan hasil ke state petList
            console.log(pets);
        } catch (error) {
            console.error("Error fetching pets:", error);
        }
    };

    return (
        <View>
            <Category category={(value) => GetPetList(value)} />
            <FlatList
                data={petList}
                style={{marginTop:10}}
                horizontal={true}
                keyExtractor={(item) => item.id} // Menambahkan keyExtractor untuk performa yang lebih baik
                renderItem={({ item }) => (
                    <PetListItem pet={item} />
                )}
            />
        </View>
    );
}
