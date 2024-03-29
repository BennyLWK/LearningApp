import React, {useEffect, useRef} from 'react';
import {Animated, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {COLORS, FONTS, SIZES} from '../constants';
import {selectedTheme} from '../redux/theme/themeSlice';

const ProfileRadioButton = ({icon, label, isSelected, onPress}) => {
  const appTheme = useSelector(selectedTheme);

  const radioAnimated = useRef(new Animated.Value(0)).current;

  const circleColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.gray40, COLORS.primary],
  });

  const lineColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.additionalColor4, COLORS.additionalColor13],
  });

  useEffect(() => {
    if (isSelected) {
      Animated.timing(radioAnimated, {
        toValue: 17,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(radioAnimated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isSelected]);

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
      }}>
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

      {/* Label */}
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
        }}>
        <Text
          style={{
            color: appTheme?.textColor,
            ...FONTS.h3,
          }}>
          {label}
        </Text>
      </View>

      {/* Radio Button */}
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onPress}>
        <Animated.View
          style={{
            width: '100%',
            height: 5,
            borderRadius: 3,
            backgroundColor: lineColorAnimated,
          }}
        />

        <Animated.View
          style={{
            position: 'absolute',
            left: radioAnimated,
            width: 25,
            height: 25,
            borderRadius: 15,
            borderWidth: 5,
            borderColor: circleColorAnimated,
            backgroundColor: appTheme?.backgroundColor1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileRadioButton;
