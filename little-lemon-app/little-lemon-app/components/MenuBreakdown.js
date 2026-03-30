import React from "react";
import {View,Button} from "react-native";

export default function MenuBreakdown(){

return(

<View style={{flexDirection:"row",justifyContent:"space-around"}}>

<Button title="Starters"/>
<Button title="Mains"/>
<Button title="Desserts"/>
<Button title="Drinks"/>

</View>

);
}