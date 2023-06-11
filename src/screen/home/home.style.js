import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({

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

  search: {
    position: 'absolute',
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 330,
    opacity: 0.8,
    borderRadius: 60,
    left: 30,
    top: -10,
    marginTop: 30,
    zIndex: 999
  },

  search_icon: {
    color: '#1aa7ec'
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

  plus: {
    position: 'relative',
    top: -80,
    left: 170,
    zIndex: 997
  },

  list: {
    position: 'relative',
    backgroundColor: '#ffff',
    flexDirection: 'row',
    width: 330,
    marginBottom: 40,
    paddingVertical: 30,
    borderRadius: 20,
    top: 80
  },

  checkboxes: {
    marginHorizontal: 20
  },

  todo_plus: {
    position: 'absolute',
    top: 560,
    left: 260,
  },

  note_container: {
    marginTop: 200,
    position: 'relative',
    marginLeft: -0,
    marginBottom: 80,
    width: 410
  },

  note: {
    backgroundColor: '#000',
    borderRadius: 20,
    marginBottom: 20,
    width: 170,
    marginHorizontal: 18
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

  create_title: {
    borderColor: "#1aa7ec",
    borderWidth: 1,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 50,
    marginBottom: 20
  },

  create_body: {
    borderColor: "#1aa7ec",
    borderWidth: 1,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 50,
    marginBottom: 20
  },

  note_create_button: {
    backgroundColor: '#1aa7ec',
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 20
  },

  note_create_text: {
    textAlign: 'center',
    color: '#fff'
  }


});


export { styles };