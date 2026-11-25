import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { couleurs } from "../constants/couleurs";
import { questions } from "../data/questions";

export default function Quizz() {
  const [index, setIndex] = useState(0);
  const [choix, setChoix] = useState<number | null>(null); 
  const [score, setScore] = useState(0);
  const [fini, setFini] = useState(false);

  const q = questions[index];
  const aRepondu = choix !== null;

  function repondre(i: number) {
    if (aRepondu) return;
    setChoix(i);
    if (i === q.bonneReponse) setScore(score + 1);
  }

  function suivante() {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setChoix(null);
    } else {
      setFini(true);
    }
  }

  function recommencer() {
    setIndex(0);
    setChoix(null);
    setScore(0);
    setFini(false);
  }

  if (fini) {
    return (
      <View style={styles.container}>
        <Text style={styles.titreFin}>Quiz terminé !</Text>
        <Text style={styles.score}>
          {score} / {questions.length}
        </Text>
        <Pressable style={styles.bouton} onPress={recommencer}>
          <Text style={styles.texteBouton}>Recommencer</Text>
        </Pressable>
        <Pressable style={styles.boutonSecondaire} onPress={() => router.back()}>
          <Text style={styles.texteBoutonSecondaire}>Retour à l’accueil</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.progression}>
        Question {index + 1} / {questions.length}
      </Text>
      <Text style={styles.question}>{q.question}</Text>

      {q.reponses.map((reponse, i) => {
        const couleur =
          aRepondu && i === q.bonneReponse
            ? styles.bonne
            : aRepondu && i === choix
              ? styles.mauvaise
              : null;

        return (
          <Pressable key={i} style={[styles.reponse, couleur]} onPress={() => repondre(i)}>
            <Text style={styles.texteReponse}>{reponse}</Text>
          </Pressable>
        );
      })}

      {aRepondu && (
        <View style={styles.explication}>
          <Text style={styles.verdict}>
            {choix === q.bonneReponse ? "Bien joué !" : "Oups...Raté !"}
          </Text>
          <Text style={styles.texteExplication}>{q.explication}</Text>
          <Pressable style={styles.bouton} onPress={suivante}>
            <Text style={styles.texteBouton}>
              {index + 1 < questions.length ? "Question suivante" : "Voir mon score"}
            </Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: couleurs.creme,
    padding: 24,
  },
  progression: {
    color: couleurs.texteDoux,
    fontSize: 15,
    marginBottom: 8,
  },
  question: {
    color: couleurs.texte,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
  },
  reponse: {
    backgroundColor: couleurs.carte,
    borderWidth: 2,
    borderColor: couleurs.jaune,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  bonne: {
    backgroundColor: couleurs.menthe,
    borderColor: couleurs.menthe,
  },
  mauvaise: {
    backgroundColor: couleurs.corail,
    borderColor: couleurs.corail,
  },
  texteReponse: {
    color: couleurs.texte,
    fontSize: 17,
  },
  explication: {
    marginTop: 12,
  },
  verdict: {
    color: couleurs.texte,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  texteExplication: {
    color: couleurs.texteDoux,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
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
  titreFin: {
    color: couleurs.texte,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 80,
  },
  score: {
    color: couleurs.orange,
    fontSize: 56,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 32,
  },
  boutonSecondaire: {
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  texteBoutonSecondaire: {
    color: couleurs.texteDoux,
    fontSize: 16,
  },
});
