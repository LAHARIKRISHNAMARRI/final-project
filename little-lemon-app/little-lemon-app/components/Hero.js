import React,{useState} from "react";
import {View,Text,TextInput,StyleSheet} from "react-native";

export default function Hero(){

const [search,setSearch] = useState("");

return(

<View style={styles.hero}>

<Text style={styles.title}>Little Lemon</Text>

<Text>
Family owned Mediterranean restaurant serving
traditional recipes with modern twist.
</Text>

<TextInput
placeholder="Search menu"
style={styles.search}
value={search}
onChangeText={setSearch}
/>

</View>

);
}

const styles = StyleSheet.create({

hero:{padding:20},

title:{fontSize:24,fontWeight:"bold"},

search:{
borderWidth:1,
marginTop:10,
padding:10
}

});