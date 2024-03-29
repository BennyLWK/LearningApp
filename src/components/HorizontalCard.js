import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {IconLabel} from '../components';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {selectedTheme} from '../redux/theme/themeSlice';

const HorizontalCard = ({containerStyle, course}) => {
  const appTheme = useSelector(selectedTheme);

  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {/* Thumbnail */}
      <ImageBackground
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: 130,
          height: 130,
          marginBottom: SIZES.radius,
        }}
        imageStyle={{borderRadius: SIZES.radius}}>
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            backgroundColor: COLORS.white,
          }}>
          <Image
            source={icons.favourite}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: course.is_favourite
                ? COLORS.secondary
                : COLORS.additionalColor4,
            }}
          />
        </View>
      </ImageBackground>

      {/* Details */}
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.base,
        }}>
        {/* Title */}
        <Text
          style={{
            color: appTheme?.textColor,
            ...FONTS.h3,
            fontSize: 18,
          }}>
          {course.title}
        </Text>

        {/* Instructor & Duration */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}>
          <Text
            style={{
              color: appTheme?.textColor,
              ...FONTS.body4,
            }}>
            By {course.instructor}
          </Text>

          <IconLabel
            icon={icons.time}
            label={course.duration}
            constainerStyle={{
              marginLeft: SIZES.base,
            }}
            iconStyle={{
              width: 15,
              height: 15,
            }}
            labelStyle={{...FONTS.body4}}
          />
        </View>

        {/* Price & Ratings */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.primary,
            }}>
            ${course.price.toFixed(2)}
          </Text>

          <IconLabel
            icon={icons.star}
            label={course.ratings}
            constainerStyle={{marginLeft: SIZES.base}}
            iconStyle={{
              width: 15,
              height: 15,
              tintColor: COLORS.primary2,
            }}
            labelStyle={{
              marginLeft: 5,
              color: appTheme?.textColor,
              ...FONTS.h3,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HorizontalCard;
