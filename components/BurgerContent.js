// components/BurgerContent.js

import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const handleOrder=()=>{
  console.log("Ya has ordenado")
  alert("Ya has ordenado una hamburguesa")
}

const BurgerContent = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/hamburguesa.jpg')} style={styles.image} />
      <Text style={styles.description}>
        ¡Deliciosa hamburguesa lista para comer!
      </Text>
      <Button 
        title="Ordenar ya" 
        onPress={handleOrder} 
        color="red" 
        titleStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
 
});

export default BurgerContent;
