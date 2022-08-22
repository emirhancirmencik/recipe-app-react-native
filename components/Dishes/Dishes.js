import { FlatList, Image, Pressable, Text, View } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Styles from "./Dishes.styles.js";

const Dishes = (props) => {
  const { data, loading, error } = useFetch(
    process.env.BASE_URL + "/filter.php?c=" + props.route.params
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const renderItem = (dish) => {
    return (
      <Pressable
        onPress={() =>
          props.navigation.navigate("DishDetail", dish.item.idMeal)
        }
      >
        <View style={Styles.inner}>
          <Image
            style={Styles.image}
            source={{ uri: dish.item.strMealThumb }}
          />
          <Text numberOfLines={1} style={Styles.text}>
            {dish.item.strMeal}
          </Text>
        </View>
      </Pressable>
    );
  };

  const keyExtractor = (item) => {
    return item.idMeal;
  };

  return (
    <View style={Styles.container}>
      <FlatList
        style={Styles.list}
        data={data.meals}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={6}
      />
    </View>
  );
};

export default Dishes;
