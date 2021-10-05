import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";

export default function App() {
  return (
      <>
          {/*<Home />*/}
          <RestaurantDetail />
          <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
