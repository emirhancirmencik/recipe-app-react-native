import { Text, View, FlatList } from "react-native";
import Styles from "./Categories.styles";
import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Categories = () => {
  const { loading, error, data } = useFetch(
    process.env.BASE_URL + "/list.php?c=list"
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const renderItem = ({ item }) => <Text>{item.strCategory}</Text>;
  return <View>{<FlatList data={data.meals} renderItem={renderItem} />}</View>;
};

export default Categories;
