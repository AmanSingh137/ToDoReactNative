import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';


const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>AAPKA BAZAAR</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  header: {height: 60, padding: 15, backgroundColor: 'darkslateblue'},
  text: {color: 'white', fontSize: 20, textAlign: 'center'} 
})


export default Header;
