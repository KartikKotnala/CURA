import { View, Text, StyleSheet } from "react-native";

export default function Emergency() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EMERGENCY MODE</Text>
      <Text>Critical medical information only.</Text>
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
    fontSize: 24,
    color: "red",
    fontWeight: "600",
    marginBottom: 12,
  },
});