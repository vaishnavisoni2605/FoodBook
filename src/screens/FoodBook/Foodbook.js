/**
 * file: Foodbook.js
 * author: Vaishnavi Soni <vsg855@uregina.ca>
 * version: 0.1
 * date-created: Mar-19-2022
 * last-modified: Apr-5-2022 
 */

import React ,{useLayoutEffect} from "react";
import { FlatList, Text, View, Image, TouchableHighlight, ScrollView, ImageBackground, Button, StatusBar, StyleSheet } from "react-native";
import styles from "./styles";

/**
 * FoodBook
 * Purpose: This function consists of two functions renderHeader and renderDetails. renderheader consists of backgroung image and some text content and renderDetails consists of view all recipes button which takes the user to home screen.
 * Returns: 
 * <1> renderHeader function
 * <2> renderDetails function
 */

export default function FoodBook ({ navigation }) {
  // renderHeader function consists of the background image.
  function renderHeader(){
    return(
      <View style={{height:"75%"}}>
      <ImageBackground source ={require('./background1.jpg')} style= {{flex:1 ,                           justifyContent:'flex-end' }} resizeMode = "cover">
      <Text style ={{width:"100%", fontSize: 65, lineHeight: 85, color:"yellow", marginBottom:"10%", fontFamily:"Chalkduster" }}>
      FoodBook
      </Text>
      </ImageBackground>
      
      </View>
    );
  }
  // renderDetails function consists of view all recipes app which takes to home screen.
  function renderDetails(){
    return(
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style ={{width:"100%", marginTop:"5%",  marginLeft:'1%', fontSize: 22, color:"saddlebrown", fontFamily:"Chalkduster"}}> 
          You are what you eat so don't be Fast, Cheap, Easy or Fake !
        </Text>
        
        <View style={[styles.button, {flex:1, justifyContent:'center', marginTop:"10%"}]}>
          <Button title ="View All Recipes"  onPress={()=> navigation.navigate("Home")} >
          </Button>
        </View>
      </View>

    );
  }
  //calling function renderHeader and renderDetails.
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content"/>
            {renderHeader()}
            {renderDetails()}
    </View>
  );
}
  