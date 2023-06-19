import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (keyName) => {
  const [oldValue, setOldValue] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem(keyName).then(res => setOldValue(JSON.parse(res)));
  }, []);

  const setNewValue = (newValue) => {
    const totalList = [...oldValue, newValue]
    AsyncStorage.setItem(keyName, JSON.stringify(totalList));
  }

  return [oldValue, setNewValue]
}