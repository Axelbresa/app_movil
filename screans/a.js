import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export function Api_pokemon() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200');
                const data = await response.json();
                // console.log('Datos obtenidos:', data); 
                setPokemons(data.results);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);

    // console.log('Pokémons:', pokemons); // Verifica el estado de los Pokémon

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {pokemons.map((pokemon, index) => (
                <View key={index} style={styles.item}>
                    <Text>{pokemon.name}</Text>
                </View>
            ))}
        </ScrollView>
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
