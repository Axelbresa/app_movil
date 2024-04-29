import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <div>
      <div>Home</div>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Stack')}
      >
        <Text style={styles.buttonText}>Stack</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Hamburguesa')}
      >
        <Text style={styles.buttonText}>Ordenar</Text>
      </TouchableOpacity>
    </div>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
