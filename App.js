// App.js
import React from 'react';
import Navigation from './navigation';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            {/* <Text>hola</Text> */}
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
