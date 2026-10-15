import { ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.eyebrow}>MY PROFILE</Text>
      <Text style={styles.heading}>Student space</Text>
      <Text style={styles.subtitle}>A simple place to keep your semester in view.</Text>
      <View style={styles.card}>
        <View style={styles.avatar}><Text style={styles.avatarText}>S</Text></View>
        <Text style={styles.cardTitle}>Software Engineering Student</Text>
        <Text style={styles.muted}>Semester 9</Text>
        <Text style={styles.task}>Current focus: mobile app development</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>About Study Planner</Text>
        <Text style={styles.body}>Browse your courses, check class details, and find a few tips for a productive study session.</Text>
        <Text style={styles.note}>Course information is sample data for this assignment.</Text>
      </View>
    </ScrollView>
  );
}
