// screens/PreferencesScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import RestaurantCard from '../../components/RestaurantCard';

interface Restaurant {
  id: string;
  name: string;
  image: string;
  description: string;
}

const PreferencesScreen = ( { navigation }: { navigation: any } ) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState<string[]>([]); // To track selected restaurants

  // Mock data - replace with database fetch
  useEffect(() => {
    const mockRestaurants = [
      { id: '1', name: 'Pizza Palace', image: 'https://via.placeholder.com/150', description: 'Best pizza in town!' },
      { id: '2', name: 'Sushi World', image: 'https://via.placeholder.com/150', description: 'Fresh sushi and rolls.' },
      { id: '3', name: 'Burger Hub', image: 'https://via.placeholder.com/150', description: 'Juicy burgers.' },
      { id: '4', name: 'Pasta Paradise', image: 'https://via.placeholder.com/150', description: 'Delicious pasta dishes.' },
      { id: '5', name: 'Salad Station', image: 'https://via.placeholder.com/150', description: 'Healthy and tasty salads.' },
      { id: '6', name: 'Taco Town', image: 'https://via.placeholder.com/150', description: 'Authentic Mexican tacos.' },
    ];
    setRestaurants(mockRestaurants);
  }, []);


  const toggleSelectRestaurant = (id: string) => {
    setSelectedRestaurants((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((restaurantId) => restaurantId !== id)
        : [...prevSelected, id]
    );
  };

  const handleCreateAccount = () => {
    // Logic for account creation (e.g., save preferences, etc.)
    navigation.navigate('FoodPreferences'); // Navigate to the home screen or wherever appropriate
  };

  return (
    <View style={styles.container}>
        <Text>Last step! Choose a few of your favorite picks:</Text>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantCard 
          name={item.name} 
          image={item.image} 
          isSelected={selectedRestaurants.includes(item.id)} 
          onSelect={() => toggleSelectRestaurant(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={handleCreateAccount} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
});

export default PreferencesScreen;
