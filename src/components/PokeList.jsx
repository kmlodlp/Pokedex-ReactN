import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  FlatList,
} from "react-native";
import { useFetch } from "../hooks/useFetch";
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from "react-native-svg";


export const PokeList = ({ start, end }) => {
  const { data, isLoading, errors } = useFetch(start, end);
  const navigation = useNavigation();


  const Item = ({ pokeid,name, image }) => (
    <TouchableNativeFeedback onPress={() => navigation.navigate('Detalles', { pokeid, name, image })}>
      <View style={styles.item}>
        <SvgUri width={150} height={150} uri={`${image}`} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <View style={styles.List}>
      {isLoading ? (
        <Text> Cargando..</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item pokeid={item.id} name={item.name} image={item.image} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        ></FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  List: {
    width: "96%",
    padding: 4,
  },
  item: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#fff",
    backgroundColor: "#333",
    borderRadius: 10,
    overflow: "hidden",
    maxWidth: "45%",
    padding: 4,
    marginHorizontal: 4,
  },
  name: {
    marginTop: 2,
    marginBottom: 2,
    color: "#fff",
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
    textTransform: "uppercase",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
