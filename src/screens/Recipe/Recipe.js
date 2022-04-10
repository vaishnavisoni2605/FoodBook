/**
 * file: Recipe.js
 * author: Vaishnavi Soni <vsg855@uregina.ca>
 * version: 0.1
 * date-created: Mar-22-2022
 * last-modified: Apr-5-2022 
 */


import React from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollView, Text, View, Image, Dimensions, TouchableHighlight, FlatList } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataarray";
import ViewIngredientsButton from "../../components/ViewIngredientButton/ViewIngredientButton";
const { width: viewportWidth } = Dimensions.get("window");


/**
 * RecipeScreen
 * Purpose: To show the recipe of the food item
 * Parameter(s):
 * <1> props: used for navigation
 * Precondition(s):
 * <1> activeSlide and setActiveSlide must be intialized
 * Returns:
 * <1> Image of the food item.
 * <2> title of the item.
 * <3> View ingredients button to view ingredients of that particular food item
 * <4> Full recipe of the item.
 */

export default function RecipeScreen(props) {
  const { navigation, route } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();


  const item = route.params?.item;
  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );
  
  return (
    
    <ScrollView style={styles.container}>
    <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <FlatList
            ref={slider1Ref}
            data={item.photosArray}
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setActiveSlide(0)}
          />
          
      </View></View>
    
    <View style={styles.infoRecipeContainer}>
        
        <Text style={styles.infoRecipeName}>{item.title}</Text>
        
        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              let ingredients = item.ingredients;
              let title = "Ingredients for " + item.title;
              navigation.navigate("IngredientsDetails", { ingredients, title });
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}