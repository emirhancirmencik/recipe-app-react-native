import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./components/Categories";
import { useFonts } from "expo-font";
import { Image, Pressable, Text, View } from "react-native";
import Dishes from "./components/Dishes/Dishes";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";

const Stack = createNativeStackNavigator();

function App() {
  const navigationRef = useRef(null);
  const [fontsLoaded] = useFonts({
    "Great-Vibes": require("./assets/fonts/GreatVibes.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  function renderTitle(title) {
    return (
      <Text
        style={{
          color: "#666",
          fontFamily: "Great-Vibes",
          fontSize: 50,
        }}
      >
        {title}
      </Text>
    );
  }

  function renderBack() {
    return (
      <Pressable onPress={() => navigationRef.current.goBack()}>
        <Text
          style={{
            color: "#666",
            fontSize: 25,
            borderRadius: 50,
            backgroundColor: "rgba(0,0,0,0.05)",
            fontWeight: "300",
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        >
          {"<"}
        </Text>
      </Pressable>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Categories}
          options={{
            headerTitle: () => renderTitle("Categories"),
            headerStyle: {
              backgroundColor: "#f9a825",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Dishes"
          component={Dishes}
          options={{
            headerTitle: () => renderTitle("Dishes"),
            headerStyle: {
              backgroundColor: "#f9a825",
              height: 200,
            },
            headerTintColor: "#666",
            headerTitleAlign: "center",
            headerBackVisible: false,
            headerLeft: () => renderBack(),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
