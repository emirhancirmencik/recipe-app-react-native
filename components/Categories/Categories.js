import { Text, View, FlatList, Image, Pressable } from "react-native";
import Styles from "./Categories.styles";
import useFetch from "../../hooks/useFetch";
import Card from "./CategoryCard";

const Categories = ({ navigation }) => {
  const { loading, error, data } = useFetch(
    process.env.BASE_URL + "/categories.php"
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("Dishes", item.strCategory)}>
      <Card item={item} />
    </Pressable>
  );

  const keyExtractor = (item) => {
    return item.idCategory;
  };
  return (
    <View style={Styles.container}>
      <FlatList
        style={Styles.list}
        data={data.categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Categories;
