import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./home.style";

export default function EditNote({ navigation, route }) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const { item } = route.params;

  const handleOnChangeText = text => {
    setNoteTitle(text);
    console.log("Title", text)
  };

  const handleOnChangeText1 = text1 => {
    setNoteBody(text1);
    console.log("Body", text1)
  };

  const deleteNote = async () => {
    const result = await AsyncStorage.getItem('noteList');
    let notes = [];
    if (result !== null) notes = JSON.parse(result)

    const newNotes = notes.filter(n => n.id !== item.id)
    await AsyncStorage.setItem('noteList', JSON.stringify(newNotes))
    navigation.navigate("Note")
  };

  const updateNote = async () => {
    const result = await AsyncStorage.getItem('noteList');
    let notes = [];
    if (result !== null) notes = JSON.parse(result)

    const newNotes = notes.filter(n => {
      if (n.id === item.id) {
        n.title = noteTitle
        n.body = noteBody
      }
      return n;
    })
    await AsyncStorage.setItem('noteList', JSON.stringify(newNotes));
    navigation.navigate("Note");
  };

  return (

    < SafeAreaView >

      <View style={styles.create_title}>
        <TextInput placeholder='Edit Note Title' onChangeText={(text) => handleOnChangeText(text, noteTitle)}>
          <Text>{item.title}</Text>
        </TextInput>
      </View>

      <View style={styles.create_body}>
        <TextInput placeholder='Edit Note Body' onChangeText={(text1) => handleOnChangeText1(text1, noteBody)}>
          <Text>{item.body}</Text>
        </TextInput>
      </View>

      <TouchableOpacity style={styles.note_create_button} onPress={updateNote} >
        <Text style={styles.note_create_text}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.note_create_button} onPress={deleteNote}>
        <Text style={styles.note_create_text}>Delete</Text>
      </TouchableOpacity>

    </SafeAreaView >

  )
}