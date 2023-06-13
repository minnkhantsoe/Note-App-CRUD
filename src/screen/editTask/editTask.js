import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../home/home.style";

export default function EditTask({ navigation, route }) {
  const [task, setTask] = useState('');

  const { item } = route.params;

  const handleOnChangeTask = text => {
    setTask(text);
    console.log("Task", text)
  };

  const deleteTask = async () => {
    const result = await AsyncStorage.getItem('taskList');
    let tasks = [];
    if (result !== null) tasks = JSON.parse(result)

    const newTasks = tasks.filter(n => n.id !== item.id)
    await AsyncStorage.setItem('taskList', JSON.stringify(newTasks))
    navigation.navigate("ToDoList")
  };

  const updateTask = async () => {
    const result = await AsyncStorage.getItem('taskList');
    let tasks = [];
    if (result !== null) tasks = JSON.parse(result)

    const newTasks = tasks.findIndex(n => n.id == item.id)
    tasks[newTasks].task = task
    await AsyncStorage.setItem('taskList', JSON.stringify(tasks));
    navigation.navigate("ToDoList");
  };

  return (

    < SafeAreaView >

      <View style={styles.create_task}>
        <TextInput placeholder='Edit Task' onChangeText={handleOnChangeTask}>
          <Text>{item.task}</Text>
        </TextInput>
      </View>

      <TouchableOpacity style={styles.task_create_button} onPress={updateTask} >
        <Text style={{ textAlign: 'center', color: '#fff' }}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.task_create_button} onPress={deleteTask}>
        <Text style={{ textAlign: 'center', color: '#fff' }}>Delete</Text>
      </TouchableOpacity>

    </SafeAreaView >

  )
}