import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  Platform,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {COLORS, FONTS, SIZES, dummyData, icons, images} from '../../constants';
import {
  CategoryCard,
  HorizontalCard,
  IconButton,
  LineDivider,
  TextButton,
  VerticalCard,
} from '../../components';
import {selectedTheme} from '../../redux/theme/themeSlice';

const Section = ({containerStyle, title, onPress, children}) => {
  const appTheme = useSelector(selectedTheme);

  return (
    <View style={{...containerStyle}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
        }}>
        <Text style={{color: appTheme?.textColor, flex: 1, ...FONTS.h2}}>
          {title}
        </Text>

        <TextButton
          contentContainerStyle={{
            width: 80,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
          }}
          label={'See All'}
          onPress={onPress}
        />
      </View>
      {children}
    </View>
  );
};
const Home = () => {
  const appTheme = useSelector(selectedTheme);

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: Platform.OS === 'ios' ? 50 : 20,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        {/* Greetings */}
        <View
          style={{
            flex: 1,
          }}>
          <Text style={{color: appTheme?.textColor, ...FONTS.h2}}>
            Hellow Benny!
          </Text>
          <Text
            style={{
              color: COLORS.gray50,
              ...FONTS.body3,
            }}>
            Tuesday, 6 Fev 2024
          </Text>
        </View>
        {/* Notification */}
        <IconButton
          icon={icons.notification}
          iconStyle={{tintColor: appTheme?.tintColor}}
        />
      </View>
    );
  }

  function renderStartLearning() {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          alignItems: 'flex-start',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 15,
        }}
        imageStyle={{borderRadius: SIZES.radius}}>
        {/* Info */}
        <View>
          <Text style={{color: COLORS.white, ...FONTS.body2}}>HOW TO</Text>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>
            Make your brand more visible with our checklist
          </Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.white,
              ...FONTS.body4,
            }}>
            By Scott Harris
          </Text>
        </View>

        {/* Image */}
        <Image
          source={images.start_learning}
          style={{width: '100%', height: 110, marginTop: SIZES.padding}}
        />

        {/* Button */}
        <TextButton
          label={'Start Learning'}
          contentContainerStyle={{
            height: 40,
            paddingHorizontal: SIZES.padding,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          }}
          labelStyle={{color: COLORS.black}}
        />
      </ImageBackground>
    );
  }

  function renderCourses() {
    return (
      <FlatList
        horizontal
        data={dummyData.courses_list_1}
        listKey="Courses"
        keyExtractor={item => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        renderItem={({item, index}) => (
          <VerticalCard
            containerStyle={{
              marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index === dummyData.courses_list_1.length - 1
                  ? SIZES.padding
                  : 0,
            }}
            course={item}
          />
        )}
      />
    );
  }

  function renderCategories() {
    return (
      <Section title={'Categories'}>
        <FlatList
          horizontal
          data={dummyData.categories}
          listKey="Categories"
          keyExtractor={item => `Categories-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) => (
            <CategoryCard
              category={item}
              containerStyle={{
                marginLeft: index === 0 ? SIZES.padding : SIZES.base,
                marginRight:
                  index === dummyData.categories.length - 1 ? SIZES.padding : 0,
              }}
            />
          )}
        />
      </Section>
    );
  }

  function renderPopularCourses() {
    return (
      <Section
        title={'Popular Courses'}
        containerStyle={{
          marginTop: 30,
        }}>
        <FlatList
          data={dummyData.courses_list_2}
          listKey="PopularCourses"
          scrollEnabled={false}
          keyExtractor={item => `PopularCourses-${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.padding,
          }}
          renderItem={({item, index}) => (
            <HorizontalCard
              course={item}
              containerStyle={{
                marginVertical: SIZES.padding,
                marginTop: index === 0 ? SIZES.radius : SIZES.padding,
              }}
            />
          )}
          ItemSeparatorComponent={() => (
            <LineDivider
              lineStyle={{
                backgroundColor: COLORS.gray20,
              }}
            />
          )}
        />
      </Section>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appTheme?.backgroundColor1,
      }}>
      {/* Header */}
      {renderHeader()}

      {/* Content */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}>
        {/* Start Learning */}
        {renderStartLearning()}

        {/* Courses */}
        {renderCourses()}

        <LineDivider
          lineStyle={{
            marginVertical: SIZES.padding,
          }}
        />

        {/* Categories */}
        {renderCategories()}

        {/* Popular Courses */}
        {renderPopularCourses()}
      </ScrollView>
    </View>
  );
};

export default Home;
