import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerWrapper: {
    marginTop: 3,
    height: 37,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  profileIcon: { width: 40, height: 40 },
  sessionSort: {
    marginVertical: 15,
    paddingHorizontal: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sessionWrapper: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  sessionText: { fontSize: 18, fontWeight: '500', color: '#371B34' },
});
