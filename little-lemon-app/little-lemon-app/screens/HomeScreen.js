import React from "react";
import {ScrollView, View} from "react-native";

import Header from "../components/Header";
import Hero from "../components/Hero";
import MenuBreakdown from "../components/MenuBreakdown";
import MenuList from "../components/MenuList";

export default function HomeScreen(){

return(

<ScrollView>

<Header/>

<Hero/>

<MenuBreakdown/>

<MenuList/>

</ScrollView>

);
}