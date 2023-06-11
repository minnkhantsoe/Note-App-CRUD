import { NavigationContainer } from '@react-navigation/native';
import CreateNote from "../screen/home/createNote";
import CreateTask from "../screen/home/createTask";
import { Home } from "../screen/home/home";
import { createStackNavigator } from '@react-navigation/stack';
import EditNote from '../screen/home/editNote';
import { ToDoList } from '../screen/home/todoList';

const Stack = createStackNavigator();

export default function NavigationStack() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Note" component={Home} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="CreateNote" component={CreateNote} />
        <Stack.Screen name="EditNote" component={EditNote} />
        <Stack.Screen name="ToDoList" component={ToDoList} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

