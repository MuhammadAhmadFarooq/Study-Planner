import { ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/styles';

const tips = [
  { title: 'Pick one small goal', text: 'Choose one task you can finish in this session, such as building a single screen.' },
  { title: 'Study in short sessions', text: 'Focus for 25 minutes, then take a short break before starting again.' },
  { title: 'Practice by building', text: 'Try the concept in your own app and explain what each part of the code does.' },
];

export default function TipsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.eyebrow}>A LITTLE HELP</Text>
      <Text style={styles.heading}>Make your next session count.</Text>
      <Text style={styles.subtitle}>Small habits can make a busy semester easier.</Text>
      {tips.map((tip, index) => (
        <View key={tip.title} style={styles.card}>
          <Text style={styles.tipNumber}>0{index + 1}</Text>
          <Text style={styles.cardTitle}>{tip.title}</Text>
          <Text style={styles.body}>{tip.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
