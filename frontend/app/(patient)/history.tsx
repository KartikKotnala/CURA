import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useState } from "react";

type MedicalItem = {
  id: string;
  condition: string;
  year: string;
};

export default function History() {
  const [history, setHistory] = useState<MedicalItem[]>([
    { id: "1", condition: "Asthma", year: "2018" },
    { id: "2", condition: "Diabetes", year: "2021" },
  ]);

  const addHistoryItem = () => {
    const newItem: MedicalItem = {
      id: Date.now().toString(),
      condition: "Hypertension",
      year: "2024",
    };

    setHistory((prev) => [...prev, newItem]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medical History</Text>

      <Pressable style={styles.addButton} onPress={addHistoryItem}>
        <Text style={styles.addText}>+ Add Condition</Text>
      </Pressable>

      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.condition}>{item.condition}</Text>
              <Text style={styles.year}>Diagnosed: {item.year}</Text>
            </View>

  <Pressable onPress={() =>
    setHistory((prev) => prev.filter((h) => h.id !== item.id))
  }>
    <Text style={styles.delete}>Delete</Text>
  </Pressable>
</View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  addText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  card: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
    marginBottom: 8,
  },
  condition: {
    fontSize: 16,
    fontWeight: "500",
  },
  year: {
    fontSize: 14,
    color: "#555",
  },
  delete: {
  color: "red",
  marginTop: 6,
  fontSize: 14,
},
});