import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  const [count, setCount] = useState(10);
  const [items, setItems] = useState([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Bread' },
    { id: 3, text: 'Eggs' },
    { id: 4, text: 'Juice' }
  ])

  const deleteItem = (id) => {
    setItems(prevItems => { return prevItems.filter(item => item.id !== id) })
  }

  const addItem = (text) => {
    //alert(t);

    setCount(count + 1);
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{ id: count + 5, text }, ...prevItems];
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  )
};


const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60 }
})


export default App;