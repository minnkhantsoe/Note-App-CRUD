import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TouchableOpacity, TextInput, View, Button, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Checkbox from 'expo-checkbox';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './home.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

export function ToDoList({ navigation }) {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false)

  return (

    <SafeAreaView style={styles.container}>

      <TextInput style={styles.search}>
        <EvilIcons name="search" size={40} style={styles.search_icon} />
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

      <SafeAreaView>

        <View style={styles.list}>

          <Checkbox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkboxes} />

          <Text style={{ color: '#000', marginHorizontal: 20, fontSize: 15 }}>To do list text</Text>

        </View>

        <View style={styles.list}>

          <Checkbox
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={(newValue) => setToggleCheckBox2(newValue)}
            style={styles.checkboxes} />

          <Text style={{ color: '#000', marginHorizontal: 20, fontSize: 15 }}>To do list text</Text>

        </View>

        <View style={styles.list}>

          <Checkbox
            disabled={false}
            value={toggleCheckBox3}
            onValueChange={(newValue) => setToggleCheckBox3(newValue)}
            style={styles.checkboxes} />

          <Text style={{ color: '#000', marginHorizontal: 20, fontSize: 15 }}>To do list text</Text>

        </View>

        <View style={styles.list}>

          <Checkbox
            disabled={false}
            value={toggleCheckBox4}
            onValueChange={(newValue) => setToggleCheckBox4(newValue)}
            style={styles.checkboxes} />

          <Text style={{ color: '#000', marginHorizontal: 20, fontSize: 15 }}>To do list text</Text>

        </View>

        <EvilIcons name="plus" size={70} color="#000" style={styles.todo_plus} />

      </SafeAreaView>
    </SafeAreaView>
  );
}