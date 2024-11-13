import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../config/FirebaseConfig';

export default function Slider() {
    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        GetSlider();
    }, []);

    const GetSlider = async () => {
        const snapshot = await getDocs(collection(db, 'Slider'));
        const sliders = []; // Array untuk menampung data slider

        snapshot.forEach((doc) => {
            sliders.push({ ...doc.data(), id: doc.id }); // Menambahkan setiap dokumen ke array
        });

        setSliderList(sliders); // Memperbarui state dengan array slider yang terkumpul
    };

    return (
        <View style={{ marginTop: 15 }}>
            <FlatList
                data={sliderList.slice(0, 2)}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id} // Menambahkan keyExtractor untuk performa yang lebih baik
                renderItem={({ item }) => (
                    <View>
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={style.sliderImage}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const style = StyleSheet.create({
    sliderImage: {
        width: Dimensions.get('screen').width * 0.9,
        height: 160,
        borderRadius: 15,
        marginRight: 15,
    }
});
