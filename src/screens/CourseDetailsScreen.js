import { Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default function CourseDetailsScreen({ route, navigation }) {
  // Receive the course sent by CoursesScreen and display its fields below.
  const { course } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.eyebrow}>COURSE DETAILS</Text>
      <Text style={styles.heading}>{course.title}</Text>
      <Text style={styles.subtitle}>{course.description}</Text>
      <View style={styles.card}>
        <Text style={styles.label}>COURSE CODE</Text>
        <Text style={styles.detail}>{course.code}</Text>
        <Text style={styles.label}>INSTRUCTOR</Text>
        <Text style={styles.detail}>{course.instructor}</Text>
        <Text style={styles.label}>CLASSROOM</Text>
        <Text style={styles.detail}>{course.room}</Text>
        <Text style={styles.label}>SCHEDULE</Text>
        <Text style={styles.detail}>{course.schedule}</Text>
      </View>
      <View style={styles.summary}>
        <View style={styles.flex}>
          <Text style={styles.sectionTitle}>Next task</Text>
          <Text style={styles.body}>{course.task}</Text>
        </View>
      </View>
      <Pressable accessibilityRole="button" style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to courses</Text>
      </Pressable>
    </ScrollView>
  );
}
