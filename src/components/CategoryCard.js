import React from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import {COLORS, FONTS, SIZES} from '../constants';
import {selectedTheme} from '../redux/theme/themeSlice';

const CategoryCard = ({category, containerStyle}) => {
  const appTheme = useSelector(selectedTheme);

  return (
    <TouchableOpacity>
      <ImageBackground
        source={category?.thumbnail}
        resizeMode="cover"
        style={{
          height: 150,
          width: 200,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          justifyContent: 'flex-end',
          ...containerStyle,
        }}
        imageStyle={{borderRadius: SIZES.radius}}>
        <Text
          style={{
            color: appTheme?.backgroundColor1,
            ...FONTS.h2,
          }}>
          {category?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
