import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { Api_pokemon } from './Api_pokemon';



function Setting_screan() {
  return (
    <View>
     <Api_pokemon></Api_pokemon>
    </View>
  )
}

export default Setting_screan