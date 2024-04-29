import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import BurgerContent from '../components/BurgerContent';
import { View, StyleSheet } from 'react-native';

function hamburguesa() {
    return (
      <View style={styles.container}>
        <Header />
        <BurgerContent />
        <Footer />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red', // Color de fondo rojo
    },
  });

export default hamburguesa