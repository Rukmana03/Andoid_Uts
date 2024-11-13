import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

export default function OwnerInfo({pet}) {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri:pet?.Image }} // Menampilkan gambar pengguna
        style={{
          width: 50,
          height: 50,
          borderRadius:99
        }}
      />
      <Text style={{
        fontFamily:'worksans-medium',
        fontSize:16,
        display:'flex',
        flexDirection:'row',
        gap:10
      }}>{pet?.name}</Text>
      <Text style={{
        fontFamily:'worksans',
        color:Colors.GRAY
      }}
      >Pet Owner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      marginHorizontal:20,
      paddingHorizontal:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      gap:10,
      borderWidth:1,
      borderRadius:15,
      padding:10,
      borderColor:Colors.PRIMARY,
      backgroundColor:Colors.WHITE

    }
})