// DetailsScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DetailsScreen({ navigation }: { navigation: any }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleCreateAccount = () => {
    if (!firstName || !lastName || !birthDate) {
      alert("Please fill in all fields!");
      return;
    }
    // Navigate to the PreferencesScreen
    navigation.navigate('Preferences');
  };

  const onChange = (event: any, selectedDate: any) => {
    setShowDatePicker(false);
    const currentDate = selectedDate || birthDate;
    
    if (selectedDate) {
        setBirthDate(currentDate);
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Details</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      
      <Button title="Select Birth Date" onPress={() => setShowDatePicker(true)} />

      {showDatePicker && (
        <DateTimePicker
          value={birthDate || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
          maximumDate={new Date()} // Ensure future dates can't be selected
        />
      )}

      <Text style={styles.dateText}>
      {birthDate instanceof Date ? `Selected Birth Date: ${birthDate.toLocaleDateString()}` : 'No date selected'}
        </Text>

      <Button title="Create Account" onPress={() => navigation.navigate('Preferences')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  dateText: {
    marginVertical: 12,
    fontSize: 18,
  },
});
