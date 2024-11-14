import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import BackgroundImage from '../images/background.png';
import {COLORS, FONTS} from '../helpers/colors';
import Logo from '../images/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Agenda() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  // Load tasks from AsyncStorage on component mount
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Failed to load tasks from AsyncStorage:', error);
      }
    };
    loadTasks();
  }, []);

  // Save tasks to AsyncStorage
  const saveTasksToStorage = async updatedTasks => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Failed to save tasks to AsyncStorage:', error);
    }
  };

  // Add or update a task
  const handleAddTask = () => {
    if (task.trim()) {
      let updatedTasks;
      if (editIndex !== -1) {
        updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setEditIndex(-1);
      } else {
        updatedTasks = [...tasks, task];
      }
      setTasks(updatedTasks);
      setTask('');
      saveTasksToStorage(updatedTasks); // Save to AsyncStorage
    }
  };

  // Edit a task
  const handleEditTask = index => {
    setTask(tasks[index]);
    setEditIndex(index); // No changes needed
  };

  // Delete a task
  const handleDeleteTask = index => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.task}>
      <Text style={styles.itemList}>
        {index + 1}.{item}
      </Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={styles.editButton}>Обновить</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <Text style={styles.deleteButton}>Удалить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.imageContainer}>
        <Text style={styles.heading}>Планируйте</Text>
        <Text style={styles.title}>ваш день</Text>
        <TextInput
          style={styles.input}
          placeholder="Добавить задачу"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>
            {editIndex !== -1 ? 'Обновить' : 'Добавить'}
          </Text>
        </TouchableOpacity>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />

        <Image source={Logo} style={styles.logo} />
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
  imageContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: FONTS.medium,
  },
  heading: {
    fontSize: 30,
    marginBottom: 7,
    color: COLORS.black,
    fontFamily: FONTS.extraBold,
  },
  input: {
    borderWidth: 3,
    borderColor: COLORS.main,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    height: 60,
  },
  addButton: {
    backgroundColor: COLORS.black,
    padding: 10,
    borderRadius: 12,
    marginVertical: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FONTS.regular,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    fontSize: 18,
  },
  itemList: {
    fontSize: 19,
    fontFamily: FONTS.black,
    width: '50%',
  },
  taskButtons: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 10,
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.regular,
    backgroundColor: COLORS.placeholder,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  deleteButton: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.regular,
    backgroundColor: 'red',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  logo: {
    marginTop: Platform.OS === 'ios' ? 50 : 20,
    height: 80,
    width: '80%',
    objectFit: 'contain',
    alignSelf: 'center',
  },
});
