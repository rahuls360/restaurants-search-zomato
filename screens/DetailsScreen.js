import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import zomato from "../api";

const DetailsScreen = (props) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    callAPI();
  }, [props.route.params.id]);

  const callAPI = () => {
    if (props.route.params.id) {
      zomato
        .get(`/restaurant?res_id=${props.route.params.id}`)
        .then((res) => setResult(res.data))
        .catch((err) => console.log(err));
    }
  };
  if (result) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{result.name}</Text>
        <Text>{result.name}</Text>
        <Image source={{ uri: result.featured_image }} style={styles.image} />
        <Text>Cuisines: {result.cuisines}</Text>
        <Text>Time: {result.timings}</Text>
        <Text>
          Average Price for two: {result.currency}
          {result.average_cost_for_two}
        </Text>
        <Text>Phone Numbers: {result.phone_numbers}</Text>
        <Text>{result.user_rating.aggregate_rating} stars</Text>
        <Text>{result.all_reviews_count} review</Text>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    height: 300,
    width: "100%",
  },
});

export default DetailsScreen;
