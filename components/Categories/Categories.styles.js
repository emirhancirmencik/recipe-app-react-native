import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9a825",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    resizeMode: "contain",
    borderRadius: 100,
  },
  inner: {
    flex: 1,
    width: "85%",
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 12.5,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  innerText: {
    paddingHorizontal: 75,
    fontWeight: "700",
    fontSize: 24,
    color: "#c17900",
    fontFamily: "Roboto",
  },
  innerRight: {
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    alignSelf: "flex-end",
  },
  innerLeft: {
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
  },
});
