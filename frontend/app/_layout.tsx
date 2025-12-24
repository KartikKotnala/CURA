import { Stack, Slot } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Slot />
    </Stack>
  );
}