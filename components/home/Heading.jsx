import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, SIZES } from "../../constants/index";
import styles from "./heading.style";
import { useNavigation } from "@react-navigation/native";
const Heading = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProductList");
          }}
        >
          <Ionicons name="grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
