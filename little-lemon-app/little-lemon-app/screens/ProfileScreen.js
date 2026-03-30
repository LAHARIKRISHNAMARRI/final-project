import React,{useState,useEffect} from "react";
import {View,Text,Button} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen({navigation}){

const [name,setName] = useState("");
const [email,setEmail] = useState("");

useEffect(()=>{

loadData();

},[])

const loadData = async()=>{
const n = await AsyncStorage.getItem("firstName");
const e = await AsyncStorage.getItem("email");

setName(n);
setEmail(e);
}

const logout = async()=>{
await AsyncStorage.clear();
navigation.navigate("Onboarding");
}

return(

<View style={{padding:20}}>

<Text>Name: {name}</Text>

<Text>Email: {email}</Text>

<Button title="Log Out" onPress={logout}/>

</View>

);
}