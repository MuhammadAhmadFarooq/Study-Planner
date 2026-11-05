import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getAuth, onAuthStateChanged, signInWithPhoneNumber, signOut } from '@react-native-firebase/auth';
import { getFirebaseMessage } from './src/firebase/otpErrors';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      // Android can automatically complete SMS verification.
      if (user?.phoneNumber) {
        setMessage(`Phone number verified: ${user.phoneNumber}`);
        setConfirmation(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  async function requestOtp() {
    const normalizedNumber = phoneNumber.replace(/[\s()-]/g, '');
    if (!/^\+[1-9]\d{7,14}$/.test(normalizedNumber)) {
      Alert.alert('Use international format', 'Enter a valid number such as +923001234567.');
      return;
    }

    try {
      setLoading(true);
      setMessage('');
      const result = await signInWithPhoneNumber(getAuth(), normalizedNumber);
      setConfirmation(result);
      setMessage(`An OTP was sent to ${normalizedNumber}.`);
    } catch (error) {
      setMessage(getFirebaseMessage(error, 'Unable to send an OTP.'));
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp() {
    if (!/^\d{6}$/.test(code)) {
      Alert.alert('Enter the 6-digit code', 'Check the SMS message and try again.');
      return;
    }

    try {
      setLoading(true);
      setMessage('');
      await confirmation.confirm(code);
    } catch (error) {
      setMessage(getFirebaseMessage(error, 'The code is incorrect or has expired.'));
    } finally {
      setLoading(false);
    }
  }

  async function startAgain() {
    try {
      await signOut(getAuth());
    } catch {
      // It is fine if no user is currently signed in.
    }
    setPhoneNumber('');
    setCode('');
    setConfirmation(null);
    setMessage('');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.container}>
          <View style={styles.brandMark}><Text style={styles.brandMarkText}>✓</Text></View>
          <Text style={styles.eyebrow}>QUIZ 4 • FIREBASE OTP</Text>
          <Text style={styles.heading}>{confirmation ? 'Verify your number' : 'Phone verification'}</Text>
          <Text style={styles.description}>
            {confirmation ? 'Enter the 6-digit code sent to your phone.' : 'Enter your phone number and we will send a one-time password by SMS.'}
          </Text>

          {!confirmation ? (
            <View style={styles.form}>
              <Text style={styles.label}>PHONE NUMBER</Text>
              <TextInput value={phoneNumber} onChangeText={setPhoneNumber} placeholder="+923001234567"
                placeholderTextColor="#8A9891" keyboardType="phone-pad" autoComplete="tel"
                textContentType="telephoneNumber" editable={!loading} style={styles.input} />
              <Text style={styles.help}>Use your country code, for example +92 for Pakistan.</Text>
              <PrimaryButton title="Send OTP" loading={loading} onPress={requestOtp} />
            </View>
          ) : (
            <View style={styles.form}>
              <Text style={styles.label}>ONE-TIME PASSWORD</Text>
              <TextInput value={code} onChangeText={(value) => setCode(value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000" placeholderTextColor="#8A9891" keyboardType="number-pad"
                autoComplete="sms-otp" textContentType="oneTimeCode" maxLength={6} editable={!loading}
                style={[styles.input, styles.otpInput]} />
              <PrimaryButton title="Verify OTP" loading={loading} onPress={verifyOtp} />
              <Pressable accessibilityRole="button" onPress={startAgain} disabled={loading} style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Use a different phone number</Text>
              </Pressable>
            </View>
          )}

          {!!message && (
            <View style={[styles.messageBox, message.startsWith('Phone number verified') && styles.successBox]}>
              <Text style={styles.messageText}>{message}</Text>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function PrimaryButton({ title, loading, onPress }) {
  return (
    <Pressable accessibilityRole="button" disabled={loading} onPress={onPress} style={({ pressed }) => [styles.button, (pressed || loading) && styles.buttonPressed]}>
      {loading ? <ActivityIndicator color="#FFFFFF" /> : <Text style={styles.buttonText}>{title}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1C4B3E' }, flex: { flex: 1 },
  container: { flex: 1, backgroundColor: '#F5F7F4', padding: 24, paddingTop: 80 },
  brandMark: { width: 54, height: 54, borderRadius: 27, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1C4B3E', marginBottom: 28 },
  brandMarkText: { color: '#FFFFFF', fontSize: 28, fontWeight: '800' },
  eyebrow: { color: '#28604C', fontSize: 11, fontWeight: '800', letterSpacing: 1.7, marginBottom: 12 },
  heading: { color: '#1D3028', fontSize: 31, fontWeight: '800', marginBottom: 12 },
  description: { color: '#63736A', fontSize: 16, lineHeight: 24, maxWidth: 330 }, form: { marginTop: 42 },
  label: { color: '#52635A', fontSize: 11, fontWeight: '800', letterSpacing: 1.1, marginBottom: 9 },
  input: { backgroundColor: '#FFFFFF', color: '#1D3028', borderWidth: 1, borderColor: '#DCE5DE', borderRadius: 12, fontSize: 18, paddingHorizontal: 16, height: 58 },
  otpInput: { fontSize: 25, letterSpacing: 7, textAlign: 'center' },
  help: { color: '#708078', fontSize: 13, lineHeight: 19, marginTop: 10, marginBottom: 24 },
  button: { alignItems: 'center', backgroundColor: '#1C4B3E', borderRadius: 12, justifyContent: 'center', minHeight: 55 },
  buttonPressed: { opacity: 0.65 }, buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
  secondaryButton: { alignItems: 'center', padding: 18 }, secondaryButtonText: { color: '#28604C', fontSize: 14, fontWeight: '700' },
  messageBox: { backgroundColor: '#FFF0EC', borderRadius: 12, marginTop: 24, padding: 16 }, successBox: { backgroundColor: '#E1F0E5' },
  messageText: { color: '#37463F', fontSize: 14, lineHeight: 21 },
});
