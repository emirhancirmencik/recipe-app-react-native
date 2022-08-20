import { Text, View } from "react-native";
import React from "react";

const Dishes = (props) => {
  return (
    <View>
      <Text>{props.route.params}</Text>
    </View>
  );
};

export default Dishes;
