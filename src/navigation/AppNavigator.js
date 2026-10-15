import { Pressable, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoursesScreen from '../screens/CoursesScreen';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TipsScreen from '../screens/TipsScreen';
import { colors, styles } from '../styles/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary, tabBarInactiveTintColor: colors.muted }}>
      <Tab.Screen name="Courses" component={CoursesScreen}
        options={{ tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 21 }}>▤</Text> }} />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{ tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 21 }}>●</Text> }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.primary }, headerTintColor: colors.white, headerTitleStyle: { fontWeight: '700' }, contentStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="Home" component={HomeTabs}
        options={({ navigation }) => ({
          title: 'Study Planner',
          // Meaningful header action: open the study tips screen.
          headerRight: () => (
            <Pressable accessibilityRole="button" accessibilityLabel="Open study tips" hitSlop={8}
              style={styles.headerButton} onPress={() => navigation.navigate('Tips')}>
              <Text style={styles.headerButtonText}>Study tips</Text>
            </Pressable>
          ),
        })} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen}
        // Customize the header using the received route parameter.
        options={({ route }) => ({ title: route.params.course.code })} />
      <Stack.Screen name="Tips" component={TipsScreen} options={{ title: 'Study Tips' }} />
    </Stack.Navigator>
  );
}
