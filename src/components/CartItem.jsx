import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from "../global/colors.js"
import Card from './Card'
import { useDispatch } from "react-redux";
import { removeItem } from '../features/shop/cartSlice.js'
import bin from '../../assets/bin.png'


const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(removeItem({ id: item.id }));
  }

  return (
    <Card style={styles.cartContainer}>
      <Image
        style={styles.image}
        source={{ uri: item.images[0] }}
        resizeMode="cover"
      />
      <View style={styles.column}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>Brand: {item.brand}</Text>
        <Text style={styles.text}>Price: {item.price}$</Text>
        <Text style={styles.text}>Qty: {item.quantity}</Text>
      </View>
      <View>
      <Pressable onPress={onRemoveItem}>
        <Image source={bin} style={styles.bin} />
      </Pressable>
      </View>
    </Card>
  )
}

export default CartItem

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white
  },
  column: {
    flexDirection: 'column'
  },
  text: {
    fontSize: 15,
    marginLeft: "9%",
    width: "100%",
    color: "black",
    textAlign: "left",
    fontFamily: "notoregular",
  },
  image: {
    width: 100,
    height: 100,
  },
  bin: {
    width: 50,
    height: 50,
  },
})