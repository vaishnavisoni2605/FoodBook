/**
 * file: AppNavigation.js
 * author: Vaishnavi Soni <vsg855@uregina.ca>
 * version: 0.1
 * date-created: Mar-19-2022
 * last-modified: Apr-5-2022 
 */


import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/Home/Home';
import RecipeScreen from '../screens/Recipe/Recipe';

import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetails';
import FoodBook from '../screens/FoodBook/Foodbook';
const Stack = createStackNavigator();

/**
 * MainNavigator
 * Purpose: Handles all the screens of the applicaion
 * Returns:
 * <1> Returns all the screens
 */

function MainNavigator() {
  return(
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
      initialRouteName={'FoodBook'}
    >
    
      <Stack.Screen name='FoodBook' component={FoodBook} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
} 
export default MainNavigator;