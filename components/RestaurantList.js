import React from "react";
import { Text, FlatList, View } from "react-native";
import RestarauntView from "./RestarauntView";

const RestaurantList = (props) => {
  if (props.data) {
    return (
      <View style={{ marginVertical: 10, marginHorizontal: 5 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 5,
            marginBottom: 5,
          }}
        >
          {props.title}
        </Text>
        <FlatList
          data={props.data}
          renderItem={({ item }) => <RestarauntView {...item.restaurant} />}
          keyExtractor={(item) => item.restaurant.id}
          horizontal
        />
      </View>
    );
  }
  return null;
};

export default RestaurantList;
