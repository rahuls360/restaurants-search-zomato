import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Searchbar = (props) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={props.setSearchString}
        value={props.searchString}
        placeholder="Searchbar"
        onEndEditing={props.onEndEditing}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#eee",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  icon: {
    paddingRight: 10,
  },
  input: { flex: 1 },
});
