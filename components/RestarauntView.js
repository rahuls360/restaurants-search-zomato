import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const RestarauntView = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            id: props.id,
          })
        }
      >
        <Image source={{ uri: props.featured_image }} style={styles.image} />
        <Text>{props.name}</Text>
        <View>
          <Text>{props.user_rating.aggregate_rating} stars, </Text>
          <Text>{props.all_review_count} review</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 200,
    marginHorizontal: 5,
  },
});

export default RestarauntView;
