import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import {COLORS, FONTS, SIZES, icons} from '../constants';
import {selectedTheme} from '../redux/theme/themeSlice';

const ProfileValue = ({icon, label, value, onPress}) => {
  const appTheme = useSelector(selectedTheme);

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
      }}
      onPress={onPress}>
      {/* Icon */}
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: appTheme?.backgroundColor3,
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.primary,
          }}
        />
      </View>

      {/* Label & Value */}
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
        }}>
        {label && (
          <Text
            style={{
              color: COLORS.gray30,
              ...FONTS.body3,
            }}>
            {label}
          </Text>
        )}

        <Text style={{color: appTheme?.textColor, ...FONTS.h3}}>{value}</Text>
      </View>

      {/* Icon */}
      <Image
        source={icons.right_arrow}
        style={{
          tintColor: appTheme?.tintColor,
          width: 15,
          height: 15,
        }}
      />
    </TouchableOpacity>
  );
};

export default ProfileValue;
