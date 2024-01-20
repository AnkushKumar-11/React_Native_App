import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigation = useNavigation();
  const handleRegister = () =>{
    const user = {
      name: name,
      email:email,
      password: password,
      image: image
    }
    //send a POST request to the backend API to register the user
    
    //instead of using http://local host which was not connecting I used 10.0.2.2 which is the local address of android so it is working by changing it now
    axios.post("http://10.0.2.2:8000/register", user).then((response) => {
      console.log(response);
      Alert.alert("Registration successful",
      "You have been registered Successfully")
      
      setName("")
      setEmail("")
      setPassword("")
      setImage("")
    }).catch((error) =>{
      Alert.alert("Registration Error",
      "An error occurred while registering")
      console.log("registration failed", error)
    })
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#4A55A2", fontWeight: "600", fontSize: 17 }}>
            Welcome!!
          </Text>

          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
            Register Here
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "grey" }}>
              Name
            </Text>

            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 4,
                width: 300,
                fontSize: 15,
              }}
              placeholder="Mohan"
              placeholderTextColor={"gray"}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "grey",
                marginTop: 17,
              }}
            >
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 4,
                width: 300,
                fontSize: 15,
              }}
              placeholder="@gmail.com"
              placeholderTextColor={"gray"}
            />
          </View>
        </View>

        <View style={{ marginTop: 17 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "grey" }}>
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 4,
                width: 300,
                fontSize: 15,
              }}
              placeholder="********"
              placeholderTextColor={"gray"}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "grey",
                marginTop: 17,
              }}
            >
              Image
            </Text>

            <TextInput
              value={image}
              onChangeText={(text) => setImage(text)}
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 4,
                width: 300,
                fontSize: 15,
              }}
              placeholder="photo"
              placeholderTextColor={"gray"}
            />
          </View>
          <Pressable
          onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: "#4A55A2",
              padding: 15,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "600",
                fontSize: 19,
              }}
            >
              Register
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", fontSize: 17 }}>
              Already have an account? Sign in
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
