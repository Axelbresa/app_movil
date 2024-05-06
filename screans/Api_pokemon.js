import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export function Api_pokemon() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
                const data = await response.json();
                console.log('Datos obtenidos:', data); 
                setPokemons(data.results);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);

    console.log('Pokémons:', pokemons); // Verifica el estado de los Pokémon

    return (
        <View>
            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={{ padding: 10 }}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}
