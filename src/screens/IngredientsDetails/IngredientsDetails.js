/**
 * file: IngredientsDetails.js
 * author: Vaishnavi Soni <vsg855@uregina.ca>
 * version: 0.1
 * date-created: Mar-22-2022
 * last-modified: Apr-5-2022 
 */

import React ,{useLayoutEffect} from "react";
import { FlatList, Text, View, Image, TouchableHighlight, ScrollView } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataarray";
import { getIngredientName, getAllIngredients } from "../../data/ingredientsdata";

/**
 * IngredientDetailsScreen
 * Purpose: To show all the ingredients of the particular food item.
 * Parameter(s):
 * <1> props: used for navigation
 * Returns:
 * <1> List of ingredients for particular recipeid.
 */

export default function IngredientsDetailsScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.ingredients;
  const ingredientsArray = getAllIngredients(item);
  useLayoutEffect(() => {
      navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

/**
 * renderIngredient
 * Purpose: Fetching ingredients from the dataarray
 * Parameter(s):
 * <1> item: used for fetching data from the dataarray
 * Returns:
 * <1> N/A
 */
  const renderIngredient = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
      <View style={styles.container}>
        <Text style={styles.title}>{item[0].name}</Text>
        
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={3} data={ingredientsArray} renderItem={renderIngredient} keyExtractor={(item) => `${item.recipeid}`} />
    </View>
  );
}
