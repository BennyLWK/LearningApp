import React from 'react';
import {Image, Text, View} from 'react-native';

import {COLORS, FONTS, SIZES} from '../constants';
const IconLabel = ({constainerStyle, icon, iconStyle, label, labelStyle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...constainerStyle,
      }}>
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.gray30,
          ...iconStyle,
        }}
      />

      <Text
        style={{
          marginLeft: SIZES.base,
          color: COLORS.gray30,
          ...FONTS.body3,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
