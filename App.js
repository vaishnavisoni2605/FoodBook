/**
 * file: App.js
 * author: Vaishnavi Soni <vsg855@uregina.ca>
 * version: 0.1
 * date-created: Mar-19-2022
 * last-modified: Apr-5-2022 
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './src/navigations/AppNavigation';

/**
 * App
 * Purpose: Output of the application
 * Returns:
 * <1> Returns the function MainNavigator from AppNavigation.js file to show the output of the application.
 */
export default function App() {
  return (
     <MainNavigator />
  );
}
