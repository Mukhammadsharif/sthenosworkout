import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import HomeBackground from '../images/background.png';
import Logo from '../images/logo.png';
import BackIcon from '../images/back_icon.png';
import {GlobalContext} from '../context/GlobalContext';
import {useNavigation} from '@react-navigation/native';
import exercises from '../exercises';
import TrainCard from '../customs/TrainCard';
import {FONTS} from '../helpers/colors';

export default function Exercises() {
  const navigation = useNavigation();
  const {category} = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={HomeBackground}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={BackIcon} style={styles.backIcon} />
          </TouchableOpacity>
          <Image source={Logo} style={styles.logo} />
          <View />
        </View>

        <Text style={styles.title}>{category}</Text>

        <ScrollView style={{flex: 1}} contentContainerStyle={styles.view}>
          {exercises
            .filter(ex => ex.category === category)
            .map((ex, index) => (
              <TrainCard item={ex} key={index} />
            ))}
        </ScrollView>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 50 : 20,
  },
  logo: {
    height: 50,
    width: '50%',
    objectFit: 'contain',
    alignSelf: 'center',
  },
  backIcon: {
    width: 30,
    height: 30,
    objectFit: 'contain',
  },
  view: {
    padding: 20,
    paddingBottom: 50,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.extraBold,
    fontSize: 25,
  },
});
