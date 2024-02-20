import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {IconLabel} from '../components';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {selectedTheme} from '../redux/theme/themeSlice';

const VerticalCard = ({containerStyle, course}) => {
  const appTheme = useSelector(selectedTheme);

  return (
    <TouchableOpacity style={{width: 270, ...containerStyle}}>
      {/* Thumbnail */}
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 150,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
      />

      {/* Details */}
      <View
        style={{
          flexDirection: 'row',
        }}>
        {/* Play */}
        <View
          style={{
            width: 45,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            backgroundColor: COLORS.primary,
          }}>
          <Image
            source={icons.play}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>

        {/* Info */}
        <View
          style={{
            flexShrink: 1,
            paddingHorizontal: SIZES.radius,
          }}>
          <Text
            style={{
              color: appTheme?.textColor,
              flex: 1,
              ...FONTS.h3,
              fontSize: 18,
            }}>
            {course.title}
          </Text>

          <IconLabel
            icon={icons.time}
            label={course.duration}
            containerStyle={{
              marginTop: SIZES.base,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalCard;
