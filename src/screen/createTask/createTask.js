import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../home/home.style";

export default function CreateTask({ navigation }) {

  const [task, setTask] = useState('');

  const handleOnChangeTask = text => {
    setTask(text);
    console.log("Task", text)
  };

  const handleSubmit = async () => {
    const oldTask = await AsyncStorage.getItem('taskList').then(res => JSON.parse(res));
    console.log(oldTask);

    if (oldTask) {
      const newTask = { id: Date.now(), task: task }
      const totalList = [...oldTask, newTask]
      console.log(totalList);

      AsyncStorage.setItem('taskList', JSON.stringify(totalList));
    } else {
      const taskList = [{ id: Date.now(), task: task }]
      AsyncStorage.setItem('taskList', JSON.stringify(taskList));
    };

    navigation.navigate("ToDoList");

  };

  return (

    < SafeAreaView >

      <View style={styles.create_task}>
        <TextInput placeholder='Create Task' value={task} onChangeText={handleOnChangeTask} />
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.task_create_button}>
        <Text style={{ textAlign: 'center', color: '#fff' }}>Create</Text>
      </TouchableOpacity>
    </SafeAreaView >

  )
}