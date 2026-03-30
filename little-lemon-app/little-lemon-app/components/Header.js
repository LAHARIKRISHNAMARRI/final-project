import React from "react";
import {View,Text,StyleSheet} from "react-native";

export default function Header(){

return(

<View style={styles.header}>
<Text style={styles.logo}>Little Lemon</Text>
</View>

);
}

const styles = StyleSheet.create({

header:{
backgroundColor:"#495E57",
padding:20
},

logo:{
color:"white",
fontSize:22,
fontWeight:"bold"
}

});