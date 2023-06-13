import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TouchableOpacity, TextInput, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './home.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';

export function ToDoList({ navigation }) {
  const [task, setTask] = useState();
  const [searchTask, setSearchTask]= useState('')
  const [checkedItems, setCheckedItems] = useState('');
  const [noResult, setNoResult]= useState(false)

  const isChecked = (id) => {
    return checkedItems.includes(id);
  };

  const toggleItem = (id) => {
    if (isChecked(id)) {
      setCheckedItems(checkedItems.filter(item => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };


  const isFocus = useIsFocused();

  const findTask = async () => {

    const result = await AsyncStorage.getItem('taskList').then(res => JSON.parse(res));
    console.log("result", result);
    setTask(result);
  }

  useEffect(() => {
    if (isFocus) {
      findTask();
      
    }
  }, [isFocus]);

  const handleOnSearch = async text => {
    setSearchTask(text);
    if (!text) {
      setSearchTask('');
      setNoResult(false)
      return await findTask();
    }
    const filteredTasks = task.filter(t => {
      if (t.task.toLowerCase().includes(text.toLowerCase())) {
        return t;
      }
    });
    if (filteredTasks.length) {
      setTask([...filteredTasks])
    } else {
      setNoResult(true);
    }
  }



  return (

    <SafeAreaView style={styles.container}>

      <EvilIcons name="search" size={40} style={styles.task_search_icon} />

      <TextInput style={styles.search} value={searchTask} onChangeText={handleOnSearch}>

      </TextInput>

      <View style={styles.nav}>
        <TouchableOpacity style={{ marginHorizontal: 40 }} onPress={() => navigation.navigate("Note")}>
          <Text style={{ color: '#000', opacity: 0.5, fontSize: 30 }}>Note</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 40, borderBottomWidth: 3, borderBottomColor: '#1aa7ec', borderBottomRightRadius: 3, borderBottomLeftRadius: 3 }} onPress={() => navigation.navigate("ToDoList")}>
          <Text style={{ color: '#1aa7ec', opacity: 1, fontSize: 30 }}>ToDoList</Text>
        </TouchableOpacity>
      </View>


      <StatusBar style="auto" />

      <View>

        <View style={styles.task_container}>

          {noResult ? <Text>No Result</Text> :  <FlatList
            data={task}
            renderItem={({ item }) => {

              return (
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('EditTask', { item })} >
                    <View style={styles.list}>

                      <Text style={{ color: '#000', marginHorizontal: 40, fontSize: 15, }}>{item.task}</Text>


                      <View style={styles.checkbox} >
                        <Checkbox status={isChecked(item.id) ? "checked" : "unchecked"} onPress={() => toggleItem(item.id)} />
                      </View>

                    </View>
                  </TouchableOpacity>
                </View>
              )
            }}
            keyExtractor={item => item.id.toString()}
          />} 
         
        </View>

        <View style={styles.task_plus}>
          <EvilIcons name="plus" size={60} color="#000" onPress={() => navigation.navigate('CreateTask')} />
        </View>

      </View>
    </SafeAreaView>
  );
}