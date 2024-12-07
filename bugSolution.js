// bugSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null;
  }
};

//Example usage:
const storeAndRetrieve = async () => {
  await storeData('@my_key', { name: 'John Doe', age: 30 });
  const retrievedData = await getData('@my_key');
  console.log('Retrieved data:', retrievedData);
};
storeAndRetrieve();