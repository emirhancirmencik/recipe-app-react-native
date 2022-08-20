import { Text, View, FlatList, Image, Pressable } from "react-native";
import Styles from "./Categories.styles";
import useFetch from "../../hooks/useFetch";

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
    </Pressable>
  );
  return (
    <View style={Styles.container}>
      <FlatList
        style={Styles.list}
        data={data.categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  );
};

export default Categories;
