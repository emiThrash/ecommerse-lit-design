import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const commonStyles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.grayDark,
  },
  container: {
    flex: 15,
    width: "110%",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    flexGrow: 1,
    width: "100%",
  },
  checkoutContainer: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.grayWhite,
  },
  totalText: {
    fontFamily: "notobold",
    fontSize: 18,
    color: colors.black,
  },
  spinnerContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.grayDark,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  checkout: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "notoregular",
    color: colors.greenMain,
  },
  columnContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    color: colors.greenMain,
    fontFamily: "notoregular",
    margin: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonContainer: {
    width: "150%",
    alignItems: "center",
    marginTop: 29,
  },
  loginText: {
    fontSize: 18,
    color: "white",
    fontFamily: "notoregular",
  },
  linkText: {
    fontSize: 19,
    color: colors.greenMain,
    fontFamily: "notoregular",
  },
  productContainer: {
    marginTop: -5,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.grayLight,
  },
  description: {
    marginBottom: 10,
    color: colors.greenMain,
  },
  price: {
    marginBottom: 5,
    color: "white",
  },
  discount: {
    marginBottom: 5,
    color: "white",
  },
  rating: {
    marginBottom: 5,
    color: "white",
  },
  brand: {
    marginBottom: 5,
    color: "white",
  },
  category: {
    marginBottom: 5,
    color: "white",
  },
  addToCart: {
    marginTop: 20,
    backgroundColor: colors.greenMain,
  },
  addToCartText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "notoregular",
    margin: 5,
  },
  noLocationContainer: {
    padding: -5,
    justifyContent: "center",
    alignItems: "center",
    gap: -5,
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 200,
    height: 200,
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 20,
  },
});
