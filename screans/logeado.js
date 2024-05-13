import React from 'react'
import { View, Text } from 'react-native'

function logeado({ route }) {
    const { username } = route.params;
    console.log(username)
  return (
    <View>
        <Text>
        🎆Bienvenido {username} 📱 
        </Text>
    </View>
  )
}

export default logeado