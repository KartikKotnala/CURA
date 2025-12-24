import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function DoctorPatient() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Overview</Text>

      <Text style={styles.link} onPress={() => router.push("/doctor/notes")}>
        Add Notes
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
  },
  link: {
    color: "blue",
  },
});