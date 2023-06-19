import React from 'react';
import { Image, View } from 'react-native';
import Bell from '../../Assets/Images/bells.svg';
import styles from './HeaderSession.style';
const MainProfileImg = require('../../Assets/Images/mainprofile.png');

const HeaderSession = () => {
  return (
    <>
      <View style={styles.headerWrapper}>
        <View>
          <Image style={styles.profileIcon} source={MainProfileImg} />
        </View>
        <View>
          <Bell width={19} height={24} />
        </View>
      </View>
    </>
  );
};

export default HeaderSession;
