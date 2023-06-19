import { View, Text, TouchableOpacity } from 'react-native';
import PlayButton from '../../Assets/Images/play.svg';
import Styles from './UpcomingSession.style';

const UpcomingSession = () => {
  return (
    <View style={Styles.outerWrapper}>
      <Text style={Styles.title}>Upcoming Session</Text>
      <View style={{ marginTop: 5 }}>
        <Text style={Styles.description}>
          Sahana V, Msc in Clinical Psychology
        </Text>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={Styles.time}>7:30 PM - 8:30 PM</Text>
      </View>
      <TouchableOpacity>
        <View style={Styles.joinWrapper}>
          <View style={{ marginRight: 5 }}>
            <Text style={Styles.join}>JOIN NOW</Text>
          </View>
          <PlayButton width={14} height={14} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UpcomingSession;
