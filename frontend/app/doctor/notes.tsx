import { View, Text, StyleSheet } from "react-native";

export default function DoctorNotes() {
  return (
    <View style={styles.container}>
      <Text>Add Doctor Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});