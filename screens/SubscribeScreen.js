import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  const handleEmailChange = (email) => {
    setEmail(email);
    if (validateEmail(email)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
    } else {
      Alert.alert(
        "Subscribe",
        `Thanks for subscribing, ${email}! Stay tuned ^^!`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.img}
      />
      <View style={styles.name}>
        <Text style={styles.text}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={handleEmailChange} // Memanggil handleEmailChange saat input berubah
      />
      <TouchableOpacity
        style={[styles.button, isButtonDisabled && styles.buttonDisabled]} // Menambahkan gaya tombol saat dinonaktifkan
        onPress={handleSubscribe}
        disabled={isButtonDisabled} // Menonaktifkan tombol jika isButtonDisabled true
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  img: { marginTop: 20, width: 80, height: 95, alignSelf: "center" },
  name: {
    marginTop: 20,
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    margin: 30,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    width: 280,
    padding: 10,
  },
  button: {
    backgroundColor: "#3E514B",
    padding: 10,
    width: 280,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: "gray", // Warna tombol saat dinonaktifkan
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default SubscribeScreen;
