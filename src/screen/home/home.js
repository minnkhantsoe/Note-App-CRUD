import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TouchableOpacity, TextInput, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './home.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';

export function Home({ navigation, route }) {

  const [noteList, setNoteList] = useState();
  const [searchNote, setSearchNote] = useState('')
  const [task, setTask] = useState();
  const [searchTask, setSearchTask] = useState('');
  const [checkedItems, setCheckedItems] = useState([]);
  const [noResult, setNoResult] = useState(false)
  const [activeTab, setActiveTab] = useState(1)

  const isFocus = useIsFocused();
  const numColumns = 2;

  useEffect(() => {

    getNoteList(),
    getTaskList()

  }, [isFocus]);

  const noteTab = () => { setActiveTab(1) }
   

  const taskTab = () => { setActiveTab(2) }

  const isChecked = (id) => {
    return checkedItems.includes(id);
  };

  const checkToggleItem = (currentItemIdx) => {

       task[index].isChecked = !task[index].isChecked;
    task.map((item, idx) => {
      if (idx === currentItemIdx) {
        item.isChecked = !item.isChecked;
      } 
      return item
     })


  };

  const getNoteList = async () => {
    const result = await AsyncStorage.getItem('noteList').then(res => JSON.parse(res));
    setNoteList(result);
  }

  const getTaskList = async () => {
    const result = await AsyncStorage.getItem('taskList').then(res => JSON.parse(res));
    setTask(result);
  };

  const handleOnNoteSearch = async text => {
    setSearchNote(text);
    if (!text) {
      setSearchNote('');
      setNoResult(false)
      return getNoteList();
    }

    const filteredNotes = noteList.filter(n => n.title.toLowerCase().includes(text.toLowerCase()));
    setNoteList([...filteredNotes])};


  const handleOnTaskSearch = async text => {
    setSearchTask(text);
    if (!text) {
      setSearchTask('');
      setNoResult(false)
      return getTaskList();
    }

    const filteredTasks = task.filter(t => t.task.toLowerCase().includes(text.toLowerCase()));
    setTask([...filteredTasks])};
 

  const renderNoteItem = ({ item }) => {
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
  };

  const renderTaskItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('EditTask', { item })} >
          <View style={styles.list}>

            <Text style={{ color: '#000', marginHorizontal: 40, fontSize: 15, }}>{item.task} </Text>


            <View style={styles.checkbox} >
              <Checkbox status={isChecked(item.id) ? "checked" : "unchecked"} onPress={() => { checkToggleItem(currentItemIdx) }} />

            </View>

          </View>
        </TouchableOpacity>
      </View>
    )
  };

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />


      <EvilIcons name="search" size={40} style={activeTab == 1 ? styles.note_search_icon : styles.task_search_icon} />
      <View style={styles.search}>
        <TextInput style={{ color: '#fff' }} placeholder=' Search... ' placeholderTextColor={'white'} onChangeText={activeTab == 1 ? handleOnNoteSearch : handleOnTaskSearch} />
      </View>


      <View style={styles.nav}>
        <TouchableOpacity style={activeTab == 1 ? styles.nav_bar : { marginHorizontal: 40 }} onPress={noteTab}>
          <Text style={activeTab == 1 ? styles.nav_text : styles.nav_text_left}>Note</Text>
        </TouchableOpacity>

        <TouchableOpacity style={activeTab == 2 ? styles.nav_bar : { marginHorizontal: 40 }} onPress={taskTab}>
          <Text style={activeTab == 2 ? styles.nav_text : styles.nav_text_left}>ToDoList</Text>
        </TouchableOpacity>
      </View>

      {activeTab == 1 && <View>

        <View style={styles.note_container}>

           <FlatList
            data={noteList}
            renderItem={renderNoteItem}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={()=> <Text style={{ textAlign: 'center', marginVertical: 30, fontSize: 35 }}> No Notes Found </Text> }
            numColumns={numColumns}
          />

        </View>

        <View style={styles.note_plus}>
          <EvilIcons name="plus" size={60} color="#1aa7ec" onPress={() => navigation.navigate('CreateNote')} />
        </View>

      </View>}


      {activeTab == 2 && <View>

        <View style={styles.task_container}>

          <FlatList
            data={task}
            renderItem={renderTaskItem}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={()=> <Text style={{ textAlign: 'center', marginVertical: 30, fontSize: 35 }}> No Tasks Found </Text> }
          />

        </View>

        <View style={styles.task_plus}>
          <EvilIcons name="plus" size={60} color="#000" onPress={() => navigation.navigate('CreateTask')} />
        </View>

      </View>}


    </SafeAreaView>
  );
}