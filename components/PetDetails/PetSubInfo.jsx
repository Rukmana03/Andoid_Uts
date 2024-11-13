import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';
import PetSubInfoCard from './../Home/PetSubInfoCard';

export default function PetSubInfo({pet}) {
  return (
    <View style={{
        paddingHorizontal:20
    }}>
        <View style={{
            display:'flex',
            flexDirection:'row'
        }}>
           <PetSubInfoCard 
           icon={require('./../../assets/images/calendar.png')}
           title={'Age'}
           value={pet?.age+"Years"} />
           <PetSubInfoCard 
           icon={require('./../../assets/images/bone.png')}
           title={'Breed'}
           value={pet?.breed}/>
            
        </View>
        <View style={{
            display:'flex',
            flexDirection:'row'
        }}>
           <PetSubInfoCard 
           icon={require('./../../assets/images/sex.png')}
           title={'sex'}
           value={pet?.sex} />
           <PetSubInfoCard 
           icon={require('./../../assets/images/weight.png')}
           title={'Berat'}
           value={pet?.berat+"Kg"}/>
            
        </View>
    </View>
  )
}