import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function PatientDashboard() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Patient Dashboard
      </Text>

      <Button
        title="Medical History"
        onPress={() => router.push("/(patient)/history")}
      />
    </View>
  );
}