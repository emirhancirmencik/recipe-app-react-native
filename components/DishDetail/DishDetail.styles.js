import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9a825",
    alignItems: "center",
    paddingBottom: 20,
  },
  inner: {
    backgroundColor: "white",
    width: "90%",
    marginVertical: 10,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    overflow: "scroll",
  },
  header: {
    textAlign: "center",
    width: "100%",
    backgroundColor: "rgba(101,101,101,0.8)",
    height: 30,
    color: "#f9a825",
    zIndex: 10,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 5,
  },
  subHeader: {
    color: "red",
    marginTop: -0.2,
  },
  image: {
    width: "100%",
    height: 300,
    marginTop: -60,
  },
  instructions: {
    textAlign: "justify",
    fontSize: 16,
  },
  innerPadding: {
    padding: 10,
  },
  youtubeBtn: {
    padding: 15,
    backgroundColor: "red",
    alignItems: "center",
  },
  youtubeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});
