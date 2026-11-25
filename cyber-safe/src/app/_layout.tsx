import { Stack } from "expo-router";

import { couleurs } from "../constants/couleurs";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: couleurs.creme },
        headerTintColor: couleurs.texte,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: couleurs.creme },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="quizz" options={{ title: "Quiz" }} />
    </Stack>
  );
}
