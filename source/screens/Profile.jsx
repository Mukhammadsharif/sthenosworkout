import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  Image,
  Platform,
  TextInput,
  Animated,
  Easing,
} from 'react-native';
import BackgroundImage from '../images/background.png';
import Avatar from '../images/avatar.png';
import {COLORS, FONTS} from '../helpers/colors';
import {GlobalContext} from '../context/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import exercises from '../exercises';
import CaloryIcon from '../images/calory_icon.png';
import LottieView from 'lottie-react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
export default function Profile() {
  const {name, setName, phone, setPhone, email, setEmail, refresh} =
    useContext(GlobalContext);
  const [valueCost, setValueCost] = useState(0);
  const [percent, setPercent] = useState(0);

  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, []);

  const getStorage = async () => {
    const activities = await AsyncStorage.getItem('activities');
    if (!activities) {
      await AsyncStorage.setItem('activities', JSON.stringify([]));
    } else {
      const parsedStorage = JSON.parse(activities);
      if (parsedStorage) {
        let done = exercises.filter(item => parsedStorage.includes(item.id));
        if (done?.length) {
          let cost = 0;
          done.forEach(item => {
            cost = cost + parseInt(item.energy, 10);
          });

          let all = 0;
          exercises.forEach(item => {
            all = all + parseInt(item.energy, 10);
          });

          let localPercent = (cost / all) * 100;

          setPercent(localPercent);

          setValueCost(cost);
        }
      } else {
        setValueCost(0);
      }
    }
  };

  useEffect(() => {
    getStorage();
  }, [refresh]);

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Профиль</Text>
          <Image source={Avatar} style={styles.avatar} />
        </View>

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.placeholder}
          placeholder={'Введите ваше имя'}
          value={name}
          onChangeText={value => {
            setName(value);
            AsyncStorage.setItem('name', value);
          }}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.placeholder}
          placeholder={'Введите ваш телефон'}
          value={phone}
          onChangeText={value => {
            setPhone(value);
            AsyncStorage.setItem('phone', value);
          }}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.placeholder}
          placeholder={'Введите вашу почту'}
          value={email}
          onChangeText={value => {
            setEmail(value);
            AsyncStorage.setItem('email', value);
          }}
        />

        <View style={styles.card}>
          <Image source={CaloryIcon} style={styles.icon} />
          <Text style={styles.name}>
            {valueCost} ккал {'\n'} потрочено
          </Text>

          <Text style={styles.name}> {Math.round(percent)} %</Text>
        </View>

        <View style={styles.animationRow}>
          <AnimatedLottieView
            source={require('../animations/profile_animation_1.json')}
            progress={animationProgress.current}
            style={styles.animation}
          />
          <AnimatedLottieView
            source={require('../animations/profile_animation_2.json')}
            progress={animationProgress.current}
            style={styles.animation}
          />
        </View>
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
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: Platform.OS === 'ios' ? 50 : 20,
  },
  avatar: {
    width: 50,
    height: 50,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
  },
  textInput: {
    width: '85%',
    alignSelf: 'center',
    height: 50,
    borderColor: COLORS.main,
    borderWidth: 0.8,
    marginTop: 20,
    paddingLeft: 20,
    borderRadius: 14,
    color: COLORS.black,
    fontFamily: FONTS.italic,
    fontWeight: 'bold',
  },
  card: {
    width: '85%',
    alignSelf: 'center',
    borderColor: COLORS.main,
    borderWidth: 1.5,
    padding: 20,
    marginTop: 50,
    borderRadius: 25,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    height: 100,
    objectFit: 'contain',
    width: 80,
  },
  name: {
    textAlign: 'center',
    fontFamily: FONTS.extraBold,
    fontSize: 24,
  },
  animation: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.3,
  },
  animationRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
