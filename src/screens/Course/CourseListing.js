import React from 'react';
import {Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {COLORS, FONTS} from '../../constants';

const CourseListing = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Text>Course Listing</Text>
    </View>
  );
};

export default CourseListing;
