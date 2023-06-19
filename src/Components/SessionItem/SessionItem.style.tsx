import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outerWrapper: {
    paddingVertical: 15,
    paddingBottom: 5,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FEF3E7',
    borderRadius: 20,
    marginBottom: 15,
    flex: 1,
  },
  profileIcon: {
    height: 35,
    width: 35,
  },
  title: {
    fontWeight: '400',
    fontSize: 12,
    color: '#573926',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#573926',
  },
  description: {
    fontWeight: '400',
    color: '#573926',
    fontSize: 12,
  },
  date: {
    color: '#707070',
    fontWeight: '400',
    fontSize: 12,
  },
  time: {
    color: '#707070',
    fontWeight: '400',
    fontSize: 12,
  },
  divider: {
    paddingVertical: 5,
    color: '#D9D8D8',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D8D8',
  },
  bottomWrapper: { flex: 1, flexDirection: 'row', paddingVertical: 6 },
  itemBottomWrapper: {
    marginRight: 10,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  activeButton: {
    width: 'auto',
    alignSelf: 'flex-start',
    backgroundColor: '#FE8235',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9,
    height: 40,
    padding: 10,
  },
  secondaryButton: {
    width: 'auto',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9,
    height: 40,
    padding: 10,
  },
  secondaryText: { color: '#FE8235', fontWeight: '700', fontSize: 14 },
  primaryText: { color: '#FBFBFB', fontWeight: '700', fontSize: 14 },
});
