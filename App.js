// App.js
import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import BurgerContent from './components/BurgerContent';
import Navigation from './navigation';
import { StyleSheet, View } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Navigation />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e21711',
    },
});

export default App;

{/* <Header />
      <BurgerContent />
      <Footer /> */}