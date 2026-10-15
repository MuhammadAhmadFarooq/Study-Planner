import { StyleSheet } from 'react-native';

export const colors = { primary: '#285747', background: '#F4F6F2', white: '#FFFFFF', text: '#20342B', muted: '#65736B', soft: '#E3EDE4' };

export const styles = StyleSheet.create({
  screen: { padding: 22, paddingBottom: 36, flexGrow: 1, backgroundColor: colors.background },
  eyebrow: { color: colors.primary, fontSize: 11, fontWeight: '800', letterSpacing: 2, marginTop: 6, marginBottom: 12 },
  heading: { color: colors.text, fontSize: 29, fontWeight: '800', marginBottom: 10 },
  subtitle: { color: colors.muted, fontSize: 15, lineHeight: 23, marginBottom: 24 },
  summary: { backgroundColor: colors.soft, borderRadius: 16, padding: 20, flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 24 },
  summaryNumber: { color: colors.primary, fontSize: 38, fontWeight: '800' },
  summaryTitle: { color: colors.text, fontSize: 16, fontWeight: '700', marginBottom: 5 },
  flex: { flex: 1 },
  sectionTitle: { color: colors.text, fontSize: 18, fontWeight: '700', marginBottom: 12 },
  card: { backgroundColor: colors.white, borderColor: '#DFE6DF', borderWidth: 1, borderRadius: 16, padding: 20, marginBottom: 14 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  badge: { color: colors.primary, backgroundColor: colors.soft, fontSize: 11, fontWeight: '700', paddingVertical: 5, paddingHorizontal: 9, borderRadius: 6 },
  arrow: { fontSize: 24, color: colors.primary },
  cardTitle: { color: colors.text, fontSize: 19, fontWeight: '700', marginBottom: 8 },
  muted: { color: colors.muted, fontSize: 13, lineHeight: 20 },
  task: { color: colors.primary, fontSize: 13, lineHeight: 20, borderTopWidth: 1, borderTopColor: '#EDF0EB', paddingTop: 13, marginTop: 14 },
  pressed: { opacity: 0.65 },
  label: { color: colors.muted, fontSize: 10, fontWeight: '700', letterSpacing: 1, marginBottom: 6 },
  detail: { color: colors.text, fontSize: 17, marginBottom: 20 },
  body: { color: colors.text, fontSize: 15, lineHeight: 24 },
  button: { backgroundColor: colors.primary, padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: colors.white, fontSize: 15, fontWeight: '700' },
  headerButton: { paddingVertical: 8, paddingHorizontal: 10, borderRadius: 8, backgroundColor: '#3D6B59' },
  headerButtonText: { color: colors.white, fontSize: 12, fontWeight: '700' },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  avatarText: { fontSize: 25, fontWeight: '700', color: colors.primary },
  note: { fontSize: 12, lineHeight: 19, color: colors.muted, marginTop: 14 },
  tipNumber: { color: colors.primary, fontSize: 24, fontWeight: '800', marginBottom: 12 },
});
