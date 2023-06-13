import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../home/home.style";

export default function CreateNote({ navigation }) {

  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  const handleOnChangeTitle = text => {
    setNoteTitle(text);
    console.log("Title", text)
  };

  const handleOnChangeBody = text => {
    setNoteBody(text);
    console.log("Body", text)
  };

  const handleSubmit = async () => {
    const oldNote = await AsyncStorage.getItem('noteList').then(res => JSON.parse(res));
    console.log(oldNote);
    if (oldNote) {
      const newNote = { id: Date.now(), title: noteTitle, body: noteBody }
      const totalList = [...oldNote, newNote]
      console.log(totalList);
      AsyncStorage.setItem('noteList', JSON.stringify(totalList));
    } else {
      const noteList = [{ id: Date.now(), title: noteTitle, body: noteBody }]
      AsyncStorage.setItem('noteList', JSON.stringify(noteList));
    };

    navigation.navigate("Note");

  };

  return (

    < SafeAreaView >

      <View style={styles.create_title}>
        <TextInput placeholder='Create Note Title' value={noteTitle} onChangeText={handleOnChangeTitle} />
      </View>

      <View style={styles.create_body}>
        <TextInput placeholder='Create Note Body' value={noteBody} onChangeText={handleOnChangeBody} />
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.note_create_button}>
        <Text style={{textAlign: 'center', color: '#fff'}}>Create</Text>
      </TouchableOpacity>

    </SafeAreaView >

  )
}