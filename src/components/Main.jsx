import React from "react";
import { PokemonView } from "../views/PokemonView";
import { PokeDetailsViews } from '../views/PokeDetailsViews'
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Main = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Pokemon" component={PokemonView} />
          <Stack.Screen name="Detalles" component={PokeDetailsViews} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  });