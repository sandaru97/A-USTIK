import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//imort simple knob
import Knob from "react-simple-knob";


export default function App() {
  return (
    <View style={styles.container}>
    <Knob
      name="Volume"
      unit="dB"
      defaultPercentage={0.7}
      onChange={console.log}
      bg="grey"
      fg="black"
      mouseSpeed={5}
      transform={p => parseInt(p * 50, 10) - 50}
      style={{
        margin: "20%",
        height: "100px",
        fontFamily: "Arial",
        color: "red" // Sets font color of value and knob name
      }} /></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
