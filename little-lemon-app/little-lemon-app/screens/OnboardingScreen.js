import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OnboardingScreen({navigation}) {

const [firstName,setFirstName] = useState("");
const [email,setEmail] = useState("");

const saveData = async () => {
 await AsyncStorage.setItem("firstName", firstName);
 await AsyncStorage.setItem("email", email);
 navigation.navigate("Home");
}

return(
<View style={styles.container}>

<Text style={styles.title}>Welcome to Little Lemon</Text>

<TextInput
placeholder="First Name"
style={styles.input}
value={firstName}
onChangeText={setFirstName}
/>

<TextInput
placeholder="Email"
style={styles.input}
value={email}
onChangeText={setEmail}
/>

<Button
title="Next"
disabled={firstName.length === 0 || email.length === 0}
onPress={saveData}
/>

</View>
);
}

const styles = StyleSheet.create({
container:{flex:1,justifyContent:"center",padding:20},
title:{fontSize:24,fontWeight:"bold",marginBottom:20},
input:{borderWidth:1,padding:10,marginBottom:10}
});