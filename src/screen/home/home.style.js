import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddd',
    color: 'white',
  },

  nav: {
    flexDirection: 'row',
    position: 'absolute',
    top: 100,
    zIndex: 998
  },

  nav_bar: {
    marginHorizontal: 40,
    borderBottomWidth: 3,
    borderBottomColor: '#1aa7ec',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3
  },

  nav_text: {
    color: '#1aa7ec',
    opacity: 1,
    fontSize: 30
  },

  nav_text_left: {
    color: '#000',
    opacity: 0.5,
    fontSize: 30 
  },

  search: {
    position: 'absolute',
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 330,
    borderRadius: 60,
    left: 30,
    top: -10,
    marginTop: 30,
    zIndex: 995,
    color: '#1aa7ec',
    paddingLeft: 50,
    opacity: 0.8
  },

  note_search_icon: {
    color: '#1aa7ec',
    position: 'absolute',
    top: 28,
    right: 305,
    zIndex: 996
  },

  task_search_icon: {
    color: '#fff',
    position: 'absolute',
    top: 28,
    right: 305,
    zIndex: 996
  },

  text: {
    color: '#fff',
    fontSize: 20
  },

  content: {
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    opacity: 0.9,
    width: 130,
    borderRadius: 19
  },

  note_plus: {
    position: 'relative',
    top: -90,
    left: 170,
    zIndex: 997
  },

  task_plus: {
    position: 'relative',
    top: -92,
    left: 130,
    zIndex: 997
  },

  task_container: {
    position: 'relative',
    marginTop: 205,
    marginBottom: 90,
    width: 330,
  },

  list: {
    position: 'relative',
    backgroundColor: '#ffff',
    width: 330,
    marginBottom: 30,
    paddingVertical: 30,
    borderRadius: 20,
    paddingHorizontal: 30
  },

  checkbox: {
    marginTop: -27,
    marginHorizontal: -20
  },

  todo_plus: {
    position: 'absolute',
    top: 560,
    left: 260,
  },

  note_container: {
    marginTop: 200,
    position: 'relative',
    marginBottom: 90,
    width: 410
  },

  note: {
    backgroundColor: '#000',
    borderRadius: 20,
    marginBottom: 20,
    width: 170,
    marginHorizontal: 18,
  },

  note_title: {
    fontSize: 35,
    paddingLeft: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    color: '#fff',
    backgroundColor: '#333'

  },

  note_body: {
    fontSize: 20,
    paddingLeft: 10,
    color: '#fff',
  },


});