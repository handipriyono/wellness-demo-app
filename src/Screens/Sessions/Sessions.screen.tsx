import React from 'react';
import { FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native';
import HeaderSession from '../../Components/HeaderSession/HeaderSession.component';
import UpcomingSession from '../../Components/UpcomingSession';
import ArrowDown from '../../Assets/Images/arrowDown.svg';
import Updown from '../../Assets/Images/updown.svg';
import SessionItem from '../../Components/SessionItem';
import Styles from './Sessions.style';

const dummyData = [
  {
    id: 1,
    isActive: true,
    name: 'Kartika Sari',
  },
  {
    id: 2,
    name: 'Sabrina ',
  },
  {
    id: 3,
    name: 'Annisa',
  },
  { id: 4, name: 'Kirana' },
  {
    id: 5,
    name: 'Johan Sudarma',
  },
];

const SessionScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <HeaderSession />
      <View
        style={{
          paddingHorizontal: 10,
          paddingBottom: 50,
          marginBottom: 100,
        }}>
        <FlatList
          ListHeaderComponent={
            <View style={{ marginTop: 14, paddingHorizontal: 10 }}>
              <UpcomingSession />
              <View style={Styles.sessionSort}>
                <View style={Styles.sessionWrapper}>
                  <View style={{ marginRight: 6 }}>
                    <Text style={Styles.sessionText}>All Sessions</Text>
                  </View>
                  <ArrowDown width={13} height={8} />
                </View>
                <View>
                  <Updown width={12} height={17} />
                </View>
              </View>
            </View>
          }
          data={dummyData}
          renderItem={({ item }: any) => <SessionItem item={item} />}
          keyExtractor={item => String(item?.id)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SessionScreen;
