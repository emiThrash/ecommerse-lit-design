import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice.js";

import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors.js";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={()=> dispatch(decrement())} style={styles.button}>
          <Text style={styles.buttonText}> - </Text>
        </Pressable>
        <Text style={styles.spanInput}>{count}</Text>
        <Pressable onPress={()=> dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText}> + </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  button: {
    margin: 14,
    width: 25,
    height: 25,
    backgroundColor: colors.greenMain,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center"
  },
  spanInput: {
    width: 25,
    height: 25,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "notoregular",
    color: "white",
  },
  buttonText: {
    fontSize: 35,
    fontFamily: "notoregular",
    color: "white",
    marginTop: -20,
    marginLeft: -1.8,
    alignSelf: "center"
  },
});
