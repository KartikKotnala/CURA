import { View, Text, Button, Pressable, TextInput } from "react-native";
import { useState } from "react";

/* 1️⃣ Data model */
type MedicalItem = {
  id: number;
  name: string;
  startYear: number;
  status: "active" | "past";
};

export default function MedicalHistory() {
  /* 2️⃣ State */
  const [history, setHistory] = useState<MedicalItem[]>([]);

  /* 3️⃣ Form state (THIS is new and important) */
  const [diseaseName, setDiseaseName] = useState("");
  const [startYear, setStartYear] = useState("");
  const [status, setStatus] = useState<"active" | "past">("active");

  /* 4️⃣ Add condition using user input */
  const addCondition = () => {
    if (!diseaseName || !startYear) {
      alert("Please enter all details");
      return;
    }

    const newCondition: MedicalItem = {
      id: Date.now(),
      name: diseaseName,
      startYear: Number(startYear),
      status,
    };

    setHistory((prev) => [...prev, newCondition]);

    // Reset form
    setDiseaseName("");
    setStartYear("");
    setStatus("active");
  };

  /* 5️⃣ Delete condition */
  const deleteCondition = (id: number) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  /* 6️⃣ Toggle status */
  const toggleStatus = (id: number) => {
    setHistory((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "active" ? "past" : "active",
            }
          : item
      )
    );
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Add Condition Form */}
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Add Condition</Text>

      <TextInput
        placeholder="Disease name"
        value={diseaseName}
        onChangeText={setDiseaseName}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />

      <TextInput
        placeholder="Start year"
        value={startYear}
        onChangeText={setStartYear}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />

      <Pressable onPress={() => setStatus(status === "active" ? "past" : "active")}>
        <Text style={{ color: "blue", marginBottom: 12 }}>
          Status: {status} (tap to toggle)
        </Text>
      </Pressable>

      <Button title="Add Condition" onPress={addCondition} />

      {/* Empty State */}
      {history.length === 0 && (
        <Text style={{ marginTop: 20 }}>
          No medical history added yet.
        </Text>
      )}

      {/* List */}
      {history.map((item) => (
        <View
          key={item.id}
          style={{
            marginTop: 16,
            padding: 12,
            borderWidth: 1,
            borderRadius: 8,
          }}
        >
          <Text>
            {item.name} ({item.startYear})
          </Text>
          <Text>Status: {item.status}</Text>

          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Pressable
              onPress={() => toggleStatus(item.id)}
              style={{ marginRight: 16 }}
            >
              <Text style={{ color: "blue" }}>Toggle Status</Text>
            </Pressable>

            <Pressable onPress={() => deleteCondition(item.id)}>
              <Text style={{ color: "red" }}>Delete</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
}