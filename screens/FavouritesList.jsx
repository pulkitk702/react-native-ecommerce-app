import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./favouritesList.style";

const FavouritesList = ({ item }) => {
  const MemoizedFavouritesList = useMemo(() => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.image}>
          <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.supplier}>{item.supplier}</Text>
          <Text style={styles.supplier}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }, [item]);

  return MemoizedFavouritesList;
};

export default FavouritesList;
