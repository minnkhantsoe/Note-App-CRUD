import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TouchableOpacity, TextInput, View, Button, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './home.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';


export function Home({ navigation }) {
  const [noteList, setNoteList] = useState();
  const [searchNote, setSearchNote]= useState('')
  const [noResult, setNoResult]= useState(false)

  const isFocus = useIsFocused();
  const numColumns = 2;

  const findNote = async () => {

    const result = await AsyncStorage.getItem('noteList').then(res => JSON.parse(res));
    console.log("result", result);
    setNoteList(result);
  }

  useEffect(() => {
    if (isFocus) {
      findNote();
    }
  }, [isFocus]);

  const handleOnSearch = async text => {
    setSearchNote(text);
    if (!text) {
      setSearchNote('');
      setNoResult(false)
      return await findNote();
    }
    const filteredNotes = noteList.filter(n => {
      if (n.title.toLowerCase().includes(text.toLowerCase())) {
        return n;
      }
    });
    if (filteredNotes.length) {
      setNoteList([...filteredNotes])
    } else {
      setNoResult(true);
    }
  }

  return (

    <SafeAreaView style={styles.container}>

      <TextInput style={styles.search} onChangeText={handleOnSearch}>
        
      </TextInput>

      <EvilIcons name="search" size={40} style={styles.search_icon} />

      <View style={styles.nav}>
        <TouchableOpacity style={{ marginHorizontal: 40, borderBottomWidth: 3, borderBottomColor: '#1aa7ec', borderBottomRightRadius: 3, borderBottomLeftRadius: 3 }} onPress={() => navigation.navigate("Note")}>
          <Text style={{ color: '#1aa7ec', opacity: 1, fontSize: 30 }}>Note</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 40 }} onPress={() => navigation.navigate("ToDoList")}>
          <Text style={{ color: '#000', opacity: 0.5, fontSize: 30 }}>ToDoList</Text>
        </TouchableOpacity>
      </View>


      <StatusBar style="auto" />

      <View>

        <View style={styles.note_container}>

          {noResult ? <Text style={{textAlign: 'center'}}>No Result</Text> : <FlatList
            data={noteList}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('EditNote', { item })} >
                    <View style={styles.note}>
                      <Text style={styles.note_title}>{item.title}</Text>
                      <Text style={styles.note_body}>{item.body}</Text>

                    </View>
                  </TouchableOpacity>
                </View>
              )
            }}
            keyExtractor={item => item.id.toString()}
            numColumns={numColumns}
          />}
          
        </View>

        <View style={styles.plus}>
          <EvilIcons name="plus" size={60} color="#1aa7ec" onPress={() => navigation.navigate('CreateNote')} />
        </View>

      </View>
    </SafeAreaView>
  );
}