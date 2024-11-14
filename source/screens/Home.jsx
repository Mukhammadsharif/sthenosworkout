import React, {useContext, useEffect, useRef} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Animated,
  Easing,
  TouchableOpacity,
  Image,
  Text,
  Platform,
} from 'react-native';
import {COLORS, FONTS} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../context/GlobalContext';
import HomeBackground from '../images/background.png';
import LottieView from 'lottie-react-native';
import Category1 from '../images/category_1.png';
import Category2 from '../images/category_2.png';
import Category3 from '../images/category_3.png';
import Category4 from '../images/category_4.png';
import Category5 from '../images/category_5.png';
import ChevronRightIcon from '../images/chevron_right.png';
import Logo from '../images/logo.png';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
export default function Home() {
  const navigation = useNavigation();
  const {setCategory} = useContext(GlobalContext);
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={HomeBackground}>
        <Image source={Logo} style={styles.logo} />
        <ScrollView style={{flex: 1}} contentContainerStyle={styles.view}>
          <TouchableOpacity
            style={styles.category}
            onPress={() => {
              setCategory('Утренняя разминка');
              navigation.navigate('Exercises');
            }}>
            <Image source={Category1} style={styles.image} />
            <Text style={styles.title}>Утренняя разминка</Text>
            <Image source={ChevronRightIcon} style={styles.chevronRight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => {
              setCategory('Кардио тренировка');
              navigation.navigate('Exercises');
            }}>
            <Image source={Category2} style={styles.image} />
            <Text style={styles.title}>Кардио тренировка</Text>
            <Image source={ChevronRightIcon} style={styles.chevronRight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => {
              setCategory('Силовая тренировка');
              navigation.navigate('Exercises');
            }}>
            <Image source={Category3} style={styles.image} />
            <Text style={styles.title}>Силовая тренировка</Text>
            <Image source={ChevronRightIcon} style={styles.chevronRight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => {
              setCategory('Растяжка');
              navigation.navigate('Exercises');
            }}>
            <Image source={Category4} style={styles.image} />
            <Text style={styles.title}>Растяжка</Text>
            <Image source={ChevronRightIcon} style={styles.chevronRight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => {
              setCategory('Йога');
              navigation.navigate('Exercises');
            }}>
            <Image source={Category5} style={styles.image} />
            <Text style={styles.title}>Йога</Text>
            <Image source={ChevronRightIcon} style={styles.chevronRight} />
          </TouchableOpacity>
        </ScrollView>

        <AnimatedLottieView
          source={require('../animations/home_animation.json')}
          progress={animationProgress.current}
          style={styles.animation}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  animation: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.2,
  },
  view: {
    padding: 20,
  },
  category: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.main,
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  chevronRight: {
    width: 50,
    height: 50,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    width: '50%',
    textAlign: 'center',
  },
  logo: {
    marginTop: Platform.OS === 'ios' ? 50 : 20,
    height: 80,
    width: '80%',
    objectFit: 'contain',
    alignSelf: 'center',
  },
});
