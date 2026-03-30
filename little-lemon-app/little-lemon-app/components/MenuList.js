import React from "react";
import {FlatList,View,Text,Image} from "react-native";
import menuData from "../data/menuData";

export default function MenuList(){

return(

<FlatList
data={menuData}
keyExtractor={(item)=>item.id}

renderItem={({item})=>(

<View style={{padding:15,flexDirection:"row"}}>

<View style={{flex:1}}>

<Text style={{fontWeight:"bold"}}>{item.name}</Text>

<Text>{item.description}</Text>

<Text>${item.price}</Text>

</View>

<Image
source={{uri:item.image}}
style={{width:80,height:80}}
/>

</View>

)}

/>

);
}