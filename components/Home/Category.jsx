import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../config/FirebaseConfig';
import Colors from './../../constants/Colors';

export default function Category({category}) {
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Fish');

    useEffect(() => {
        GetCategories();
    }, []);

    const GetCategories = async () => {
        setCategoryList([]);
        const snapshot = await getDocs(collection(db, 'Category'));
        const categories = [];
        
        snapshot.forEach((doc) => {
            const data = doc.data();
            categories.push({ ...data, id: doc.id }); // Menyimpan data dengan id unik
        });
        
        setCategoryList(categories); // Memperbarui state setelah data terkumpul
    };

    return (
        <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: 'worksans-bold', fontSize: 18 }}>Category</Text>
            <FlatList
                data={categoryList}
                numColumns={4}
                keyExtractor={(item) => item.id} // Menambahkan keyExtractor untuk performa yang lebih baik
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() =>{ 
                            setSelectedCategory(item.name);
                            category(item.name)
                        }}
                        style={{ flex: 1, alignItems: 'center', margin: 5 }}
                    >
                        <View style={[
                            styles.container,
                            selectedCategory === item.name && styles.selectedCategoryContainer
                        ]}>
                            <Image
                                source={{ uri: item.imageUrl }}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </View>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'worksans-medium'
                        }}>
                            {item?.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.LIGHT_PRIMARY,
        padding: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.PRIMARY,
        margin: 5
    },
    selectedCategoryContainer: {
        backgroundColor: Colors.SECONDARY,
        borderColor: Colors.SECONDARY
    }
});
