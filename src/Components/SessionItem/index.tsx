import { View, Text, Image, TouchableOpacity } from 'react-native';
import PlayButton from '../../Assets/Images/play.svg';
import Calendar from '../../Assets/Images/calendar.svg';
import Time from '../../Assets/Images/time.svg';
import MainProfile from '../../Assets/Images/mainprofile.png';
import Styles from './SessionItem.style';

const SessionItem = ({ item }: any) => {
  return (
    <View
      style={[
        Styles.outerWrapper,
        !item?.isActive ? { backgroundColor: '#F8F6F5' } : {},
      ]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ paddingRight: 10 }}>
          <Image style={Styles.profileIcon} source={MainProfile} />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={Styles.name}>{item?.name}</Text>
          <Text style={Styles.title}>Msc in Clinical Psychology</Text>
        </View>
      </View>

      <View style={Styles.divider} />

      <View style={Styles.bottomWrapper}>
        <View style={Styles.itemBottomWrapper}>
          <View style={{ paddingRight: 10 }}>
            <Calendar />
          </View>
          <Text style={Styles.date}>31st March ‘22</Text>
        </View>

        <View style={Styles.itemBottomWrapper}>
          <View style={{ paddingRight: 10 }}>
            <Time />
          </View>
          <Text style={Styles.time}>7:30 PM - 8:30 PM</Text>
        </View>
      </View>

      <View style={{ paddingVertical: 15, flexDirection: 'row' }}>
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {}}>
          <View style={Styles.activeButton}>
            <Text style={Styles.primaryText}>
              {item.isActive ? 'Reschedule' : 'Re-Book'}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => {}}>
          <View style={Styles.secondaryButton}>
            <Text style={Styles.secondaryText}>
              {item.isActive ? 'Join Now' : 'View Profile'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SessionItem;
