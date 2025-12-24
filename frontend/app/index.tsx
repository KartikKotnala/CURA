import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function RoleSelection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CURA</Text>
      <Text style={styles.subtitle}>Choose your role</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(patient)/history")}
      >
        <Text style={styles.buttonText}>Continue as Patient</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/doctor/login")}
      >
        <Text style={styles.buttonText}>Continue as Doctor</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: "#555",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#2563eb",
    borderRadius: 8,
    marginVertical: 8,
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});