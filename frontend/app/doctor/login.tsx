import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function DoctorLogin() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor Login</Text>

      <Text style={styles.link} onPress={() => router.push("/doctor/patient")}>
        Access Patient
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