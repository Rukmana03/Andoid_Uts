import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import { processFontFamily } from 'expo-font';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function PetListItem({ pet }) {
    const router=useRouter();
  return (
    <TouchableOpacity
    onPress={()=>router.push({
        pathname:'/pet-details',
        params: pet
    })}
    
    style={{
        padding:10,
        marginRight:15,
        backgroundColor:Colors.WHITE,
        borderRadius:10
    }}>
      <Image
        source={{ uri: pet?.imageUrl }} // Memperbaiki typo dari imagerUrl ke imageUrl
        style={{
          width: 150,
          height: 135,
          objectFit:'cover',
          borderRadius:10
        }}
      />
      <Text style={{
        FontFamily:'worksans-medium',
        FontSize:18
      }}>{pet?.name}</Text>
      <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Text style={{
        FontFamily:'worksans',
        FontSize:18
        }}>{pet?.breed}</Text>
        <Text style={{
            fontFamily:'worksans',
            color:Colors.PRIMARY,
            paddingHorizontal:7,
            borderRadius:10,
            fontSize:11,
            backgroundColor:Colors.LIGHT_PRIMARY
        }}>{pet.age} YRS</Text>
      </View>
    </TouchableOpacity >
  );
}
