import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Styles from "./DishDetail.styles";

const DishDetail = (props) => {
  const { loading, error, data } = useFetch(
    process.env.BASE_URL + "/lookup.php?i=" + props.route.params
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <ScrollView endFillColor={"#f9a825"}>
      <View style={Styles.container}>
        <View style={Styles.inner}>
          <Text numberOfLines={1} style={Styles.header}>
            {data.meals[0].strMeal}
          </Text>
          <Text style={[Styles.header, Styles.subHeader]}>
            {data.meals[0].strArea}
          </Text>
          <Image
            style={Styles.image}
            source={{ uri: data.meals[0].strMealThumb }}
          />
        </View>
        <View style={Styles.inner}>
          <Text numberOfLines={1} style={Styles.header}>
            Instructions
          </Text>
          <View style={Styles.innerPadding}>
            <Text style={Styles.instructions}>
              {data.meals[0].strInstructions}
            </Text>
          </View>
        </View>

        {data.meals[0].strYoutube && (
          <Pressable
            style={[Styles.inner, Styles.youtubeBtn]}
            onPress={() => Linking.openURL(data.meals[0].strYoutube)}
          >
            <Text style={Styles.youtubeText}>Watch on Youtube</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
};

export default DishDetail;
