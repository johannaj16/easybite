// components/RestaurantCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface RestaurantCardProps {
  name: string;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, image, isSelected, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect}>
          <View style={[styles.card, isSelected ? styles.selectedCard : null]}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
          </View>
        </TouchableOpacity>
      );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 5,
        elevation: 5,
        padding: 10,
        height: 200,
        width: 175,
      },
      selectedCard: {
        backgroundColor: '#f2f7ed', // Change background color to blue when selected
      },
      image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'black', 
      },
});

export default RestaurantCard;
