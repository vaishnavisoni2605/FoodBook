/**
 * file: Home.js
 * author: Vaishnavi Soni <vsg855@uregina.ca>
 * version: 0.1
 * date-created: Mar-19-2022
 * last-modified: Apr-5-2022 
 */


import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, Pressable } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataarray";

/**
 * HomeScreen
 * Purpose: This function displays all the list of food items with their images from the database recipes.
 * Parameter(s):
 * <1> props: used for navigation
 * Returns:
 * <1> Returns a flatlist of all the recipes from the dataarray.
 */
//Calling and displaying all the list of recipes from the dataarray
export default function HomeScreen(props){
  const { navigation } = props;
  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  /**
   * renderRecipes
   * Purpose: Displays all the food items title and images.
   * Parameter(s):
   * <1> item: used to fetch data from database.
   * Returns:
   * <1> N/A
   */
  const renderRecipes = ({ item }) => (
    <Pressable onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri:item.photo_url}} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </Pressable>
  );
  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
    </View>
  );



}
