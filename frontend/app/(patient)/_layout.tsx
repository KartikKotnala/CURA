import { Tabs } from "expo-router";

export default function PatientLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="../index" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="history" options={{ title: "History" }} />
      <Tabs.Screen name="summary" options={{ title: "Summary" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}