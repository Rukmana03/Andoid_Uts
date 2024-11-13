import { View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import MarkFav from '../MarkFav';

const PetInfo = ({pet}) => {
  return (
    <View>
        <Image source={{ uri: pet?.imageUrl}}
        style={{
            width: '100%',
            height: 400, 
            objectFit:'cover'
        }}/>
        <View style={{
            padding:20,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
        <View>
            <Text style={{
                fontFamily:'worksans-bold',
                fontSize:27
            }}>{pet?.name}</Text>
            <Text style={{
                fontFamily:'worksans',
                fontSize:16,
                color:Colors.GRAY
            }}>{pet?.address}</Text>
        </View>
        <MarkFav/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400, 
    objectFit:'cover'
  },
});


export default PetInfo;