import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, Button } from "react-native";
import Searchbar from "../components/Searchbar";
import RestaurantList from "../components/RestaurantList";
import zomato from "../api";

const HomeScreen = ({ navigation }) => {
  const [results, setResults] = useState(null);
  const [priceLow, setPriceLow] = useState(null);
  const [priceMed, setPriceMed] = useState(null);
  const [priceHigh, setPriceHigh] = useState(null);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    callAPI();
  }, []);

  useEffect(() => {
    if (results) {
      setPriceLow(
        results.filter((item) => item.restaurant.average_cost_for_two < 800)
      );
      setPriceMed(
        results.filter(
          (item) =>
            item.restaurant.average_cost_for_two >= 800 &&
            item.restaurant.average_cost_for_two < 1200
        )
      );
      setPriceHigh(
        results.filter((item) => item.restaurant.average_cost_for_two >= 1200)
      );
    }
  }, [results]);

  const callAPI = () => {
    zomato
      .get(`/search?entity_id=4&entity_type=city&q=${searchString}`)
      .then((res) => {
        setResults(res.data.restaurants);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Searchbar
        searchString={searchString}
        setSearchString={setSearchString}
        onEndEditing={callAPI}
      />
      <ScrollView style={styles.container}>
        <RestaurantList title="Cost Effective" data={priceLow} />
        <RestaurantList title="Bit Pricey" data={priceMed} />
        <RestaurantList title="Expensive" data={priceHigh} />
      </ScrollView>
      {/* <Button
        title="Go to details page"
        onPress={() => navigation.navigate("Details")}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
