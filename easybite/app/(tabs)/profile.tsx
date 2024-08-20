import { View, Image, Text, StyleSheet, TextInput, Platform } from 'react-native';
import React, { useState } from 'react';
import ParallaxScrollView from '../../components/ParallaxScrollView';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import CustomButton from '../../components/ProfilePage/informationButton';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleSubmit = () => {
    setSubmittedName(name);
  };
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#7CA982', dark: '#7CA982' }}
    headerImage={
      <View style={styles.imageContainer} >
        <View style={styles.circle}/>


        <Image
          source={require('../../components/ProfilePage/images/ramen.png')}
          style={styles.ramenPhoto}
        />
      </View>
    }>

    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="First Name"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last Name"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={name}
        onChangeText={handleNameChange}
      />
      <ThemedText style={styles.stepContainer} />
      <CustomButton title="Change Password" onPress={handleSubmit} />
      <ThemedText style={styles.stepContainer} />
      <CustomButton title="Log Out" onPress={handleSubmit} />
      {submittedName ? <Text style={styles.nameDisplay}>Logging Out, {submittedName}!</Text> : null}
    </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 25,
    bottom: 0,
    margin: 'auto',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  circle: {
    width: 169,
    height: 169,
    backgroundColor: '#243E36',
    zIndex: 0,
    borderRadius: 84.5,
    position: 'absolute'
  },
  ramenPhoto: {
    height: 111,
    width: 123,
    position: 'absolute',

  },
  inputContainer: {
    margin: 20,
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  nameDisplay: {
    marginTop: 10,
    fontSize: 18,
    color: '#333',
  },
});