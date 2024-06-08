import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SvgUri } from "react-native-svg";

export const PokemonDetails = () => {
    const route = useRoute();
    const { pokeid, name, image } = route.params;

    console.log(pokeid);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <SvgUri style={styles.image} width={380} height={280} uri={image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: "uppercase",
        marginBottom: 20,
    },
    image: {
        marginBottom: 20,
    },
})