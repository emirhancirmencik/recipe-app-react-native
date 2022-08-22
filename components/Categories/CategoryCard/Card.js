import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Styles from "../Categories.styles";

const Card = ({ item }) => {
  return (
    <View
      style={[
        Styles.inner,
        item.idCategory % 2 === 0 ? Styles.innerLeft : Styles.innerRight,
      ]}
    >
      {item.idCategory % 2 === 0 && (
        <Text style={Styles.innerText}>{item.strCategory}</Text>
      )}
      <Image
        style={Styles.image}
        source={{
          uri: item.strCategoryThumb,
        }}
      />
      {item.idCategory % 2 === 1 && (
        <Text style={Styles.innerText}>{item.strCategory}</Text>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
