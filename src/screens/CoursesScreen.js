import { Pressable, ScrollView, Text, View } from 'react-native';
import { courses } from '../data/courses';
import { styles } from '../styles/styles';

export default function CoursesScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.eyebrow}>MY SEMESTER</Text>
      <Text style={styles.heading}>Let's get studying.</Text>
      <Text style={styles.subtitle}>Your classes and next tasks, all in one place.</Text>
      <View style={styles.summary}>
        <Text style={styles.summaryNumber}>{courses.length}</Text>
        <View style={styles.flex}>
          <Text style={styles.summaryTitle}>Courses this semester</Text>
          <Text style={styles.muted}>Tap a course to view its details.</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Your courses</Text>
      {courses.map((course) => (
        <Pressable key={course.id} accessibilityRole="button" accessibilityLabel={`View ${course.title}`}
          // Pass a serializable object to the destination screen.
          onPress={() => navigation.navigate('CourseDetails', { course })}
          style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
          <View style={styles.row}>
            <Text style={styles.badge}>{course.code}</Text>
            <Text style={styles.arrow}>→</Text>
          </View>
          <Text style={styles.cardTitle}>{course.title}</Text>
          <Text style={styles.muted}>{course.schedule}</Text>
          <Text style={styles.task}>{course.task}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
