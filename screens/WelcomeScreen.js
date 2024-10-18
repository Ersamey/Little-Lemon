import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={styles.img}
      />
      <View style={styles.name}>
        <Text style={styles.text}>Little lemon</Text>
        <Text style={styles.text}>your local Mediterranean Bistro</Text>
      </View>
      <View style={styles.btnTengah}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Subscribe")}
        >
          <Text style={styles.btnText}>Newsletter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  img: {
    width: 110,
    height: 200,
    alignSelf: "center",
  },
  name: {
    marginTop: 50,
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  btnTengah: {
    marginTop: 100,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#3E514B",
    padding: 10,
    width: 250,
    borderRadius: 5,
  },
  btnText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default WelcomeScreen;
