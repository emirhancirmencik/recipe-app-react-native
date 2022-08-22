import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9a825",
  },
  inner: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 20,
    marginLeft: "10%",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    resizeMode: "cover",
  },
  text: {
    marginTop: -30,
    backgroundColor: "rgba(102, 102, 102, 0.9)",
    width: "100%",
    height: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontWeight: "700",
  },
});
