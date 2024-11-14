import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from '../helpers/colors';
import TimeIcon from '../images/time_icon.png';
import CaloryIcon from '../images/calory_icon.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from '../context/GlobalContext';

export default function TrainCard({item}) {
  const [data, setData] = useState([]);
  const {refresh, setRefresh} = useContext(GlobalContext);

  const defineItemFromStorage = async () => {
    const activities = await AsyncStorage.getItem('activities');
    if (!activities) {
      await AsyncStorage.setItem('activities', JSON.stringify([]));
    } else {
      const parsedStorage = JSON.parse(activities);
      console.log(parsedStorage);
      setData(parsedStorage);
    }
  };

  useEffect(() => {
    defineItemFromStorage();
  }, [refresh]);

  const add = async () => {
    const activities = await AsyncStorage.getItem('activities');
    let parsedStorage = JSON.parse(activities);
    parsedStorage.push(item.id);
    await AsyncStorage.setItem('activities', JSON.stringify(parsedStorage));
    setRefresh(!refresh);
  };

  const remove = async () => {
    const activities = await AsyncStorage.getItem('activities');
    let parsedStorage = JSON.parse(activities);
    parsedStorage = parsedStorage.filter(s => s !== item.id);
    await AsyncStorage.setItem('activities', JSON.stringify(parsedStorage));
    setRefresh(!refresh);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={item?.image} style={styles.image} />
        <View style={styles.right}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.description}>{item?.description}</Text>

          <View style={styles.row}>
            <View style={styles.row}>
              <Image source={TimeIcon} style={styles.icon} />
              <Text style={styles.time}>{item.time}</Text>
            </View>

            <View style={styles.row}>
              <Image source={CaloryIcon} style={styles.icon} />
              <Text style={styles.time}>{item.energy} ккал</Text>
            </View>
          </View>

          <TouchableOpacity
            style={data.includes(item.id) ? styles.buttonActive : styles.button}
            onPress={() => (data.includes(item.id) ? remove() : add())}>
            <Text
              style={
                data.includes(item.id)
                  ? styles.buttonActiveText
                  : styles.buttonText
              }>
              {data.includes(item.id) ? 'Выполнено' : 'Начать'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: COLORS.main,
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    objectFit: 'cover',
    height: 196,
    width: Dimensions.get('window').width / 3,
    borderRadius: 25,
  },
  right: {
    width: (Dimensions.get('window').width / 3) * 1.6,
    justifyContent: 'space-between',
    height: '100%',
    paddingVertical: 20,
  },
  name: {
    textAlign: 'center',
    fontFamily: FONTS.bold,
    fontSize: 18,
    paddingHorizontal: 20,
  },
  description: {
    textAlign: 'center',
    fontFamily: FONTS.regular,
    fontSize: 14,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  time: {
    fontFamily: FONTS.extraBold,
  },
  buttonActive: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.main,
    height: 40,
    marginTop: 8,
    backgroundColor: COLORS.main,
  },
  buttonActiveText: {
    color: 'white',
    fontFamily: FONTS.regular,
  },
  button: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.black,
    height: 40,
    marginTop: 8,
    backgroundColor: COLORS.black,
  },
  buttonText: {
    color: 'white',
    fontFamily: FONTS.regular,
  },
});
