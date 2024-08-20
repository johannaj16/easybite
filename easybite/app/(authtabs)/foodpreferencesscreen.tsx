// screens/PreferencesScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import RestaurantCard from '../../components/RestaurantCard';

interface Restaurant {
  id: string;
  name: string;
  image: string;
}

const FoodPreferencesScreen = ( { navigation }: { navigation: any } ) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState<string[]>([]); // To track selected restaurants

  // Mock data - replace with database fetch
  useEffect(() => {
    const mockRestaurants = [
        { id: '1', name: 'Sushi', image: 'https://via.placeholder.com/150' },
        { id: '2', name: 'Spaghetti Carbonara', image: 'https://via.placeholder.com/150' },
        { id: '3', name: 'Curry', image: 'https://via.placeholder.com/150' },
        { id: '4', name: 'Dim Sum', image: 'https://via.placeholder.com/150' },
        { id: '5', name: 'Tacos', image: 'https://via.placeholder.com/150' },
        { id: '6', name: 'Fried Chicken', image: 'https://via.placeholder.com/150' },
        { id: '7', name: 'Pho', image: 'https://via.placeholder.com/150' },
        { id: '8', name: 'Sashimi', image: 'https://via.placeholder.com/150' },
        { id: '9', name: 'Burrito', image: 'https://via.placeholder.com/150' },
        { id: '10', name: 'Pad Thai', image: 'https://via.placeholder.com/150' },
        { id: '11', name: 'Pizza', image: 'https://via.placeholder.com/150' },
        { id: '12', name: 'Ramen', image: 'https://via.placeholder.com/150' },
        { id: '13', name: 'Hamburger', image: 'https://via.placeholder.com/150' },
        { id: '14', name: 'Falafel', image: 'https://via.placeholder.com/150' },
        { id: '15', name: 'Biryani', image: 'https://via.placeholder.com/150' },
        { id: '16', name: 'Kebab', image: 'https://via.placeholder.com/150' },
        { id: '17', name: 'Fish and Chips', image: 'https://via.placeholder.com/150' },
        { id: '18', name: 'Gyoza', image: 'https://via.placeholder.com/150' },
        { id: '19', name: 'Steak', image: 'https://via.placeholder.com/150' },
        { id: '20', name: 'Hot Pot', image: 'https://via.placeholder.com/150' },
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
    navigation.navigate('Preferences'); // Navigate to the home screen or wherever appropriate
  };

  return (
    <View style={styles.container}>
        <Text>Last step! Choose the foods you definitely will not eat:</Text>
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
        <Button title="Create Account" onPress={handleCreateAccount} />
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

export default FoodPreferencesScreen;
