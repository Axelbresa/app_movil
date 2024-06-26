import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export function Api_pokemon() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200');
                const data = await response.json();
                setPokemons(data.results);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <FlatList
            data={pokemons}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = ScaledSheet.create({
    container: {
        flexGrow: 1,
        padding: '10@s',
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: '10@vs',
    },
});
