import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const AddItem = ({addItem}) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue)
  return (
    <View>
        <TextInput placeholder="Add samaan" style={styles.input} onChangeText={onChange} value={text} />
        <TouchableOpacity style={styles.btn} onPress={() =>{ addItem(text); setText('')}}>
            <Text style={styles.btnText}> <Icon name="add" size={25} color="darkslateblue" /> Add Samaan </Text>
        </TouchableOpacity>
        
    </View>
  )
};


const styles = StyleSheet.create({
  input: {height: 60, padding: 8, fontSize: 16},
  btn: {backgroundColor: "#c2bad8", padding: 9, margin: 5}, 
  btnText: {color: "darkslateblue", fontSize: 20, textAlign: "center"}
})


export default AddItem;
