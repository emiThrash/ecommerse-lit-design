import { Text, Pressable, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/auth/authSlice";
import { deleteSession } from "../db/index";

function Header({ title }) {
  const { user, localId} = useSelector(state => state.authReducer.value)
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(clearUser())
    await deleteSession({ localId });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lit Design</Text>
      <Text style={styles.text}>{title}</Text>
      {user ? (        
        <Pressable style={styles.logout} onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color={colors.greenMain}/>
        </Pressable>
      ) : null }
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: "100%",
    backgroundColor: colors.grayDark,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    color: colors.greenMain,
    fontSize: 40,
    fontFamily: "dosisbold",
  },
  text: {
    marginTop: -5,
    textAlign: "center",
    color: colors.greenMain,
    fontSize: 18,
    fontFamily: "notobold",
  },
  logout: {
    position: "absolute",
    right: 20,
    top: 60
  }
});
