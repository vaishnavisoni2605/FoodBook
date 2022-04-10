/**
 * file: ViewIngredientButton.js
 * author: Vaishnavi Soni <vsg855@uregina.ca>
 * version: 0.1
 * date-created: Mar-23-2022
 * last-modified: Apr-5-2022 
 */


import React from 'react';
import { TouchableHighlight, Image, Text, View, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

//Functionality of View Ingredients button
export default function ViewIngredientsButton (props) {
    return (
      <Pressable onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>View Ingredients</Text>
        </View>
      </Pressable>
    );
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
