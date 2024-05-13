// App.js
import React from 'react';
import Navigation from './navigation';
import { StyleSheet, View, Text } from 'react-native';
import { Api_pokemon } from './screans/Api_pokemon';

const App = () => {
    return (
        <View style={styles.container}>
            {/* <Api_pokemon></Api_pokemon> */}
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
