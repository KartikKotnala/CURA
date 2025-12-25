import { View, Text, StyleSheet } from "react-native";

export default function Summary() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medical Summary</Text>
      <Text>AI-generated overview (read-only).</Text>
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
    marginBottom: 8,
  },
});