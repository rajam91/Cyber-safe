import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { couleurs } from "../constants/couleurs";

export default function Accueil() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.haut}>
        <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
        <Text style={styles.titre}>Coucou, bienvenue dans Cyber-Safe !</Text>
        <Text style={styles.sousTitre}>
          Apprends à te protéger sur Internet en jouant.
        </Text>
      </View>

      <Link href="/quizz" asChild>
        <Pressable style={styles.bouton}>
          <Text style={styles.texteBouton}>Commencer le quiz</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: couleurs.creme,
    justifyContent: "space-between",
    padding: 24,
  },
  haut: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 26,
    marginBottom: 24,
  },
  titre: {
    fontSize: 36,
    fontWeight: "bold",
    color: couleurs.texte,
  },
  sousTitre: {
    fontSize: 17,
    color: couleurs.texteDoux,
    textAlign: "center",
    marginTop: 12,
  },
  bouton: {
    backgroundColor: couleurs.orange,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  texteBouton: {
    color: couleurs.texte,
    fontSize: 18,
    fontWeight: "bold",
  },
});
