import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
//import styles from "../screens/loginPage.style";
import { COLORS, SIZES } from "../constants/index";
const BackBtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backBtn}>
      <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default BackBtn;
const styles = StyleSheet.create({
  backBtn: {
    //marginTop: 10,
    alignItems: "center",
    position: "absolute",
    zIndex: 999,
    top: SIZES.xxLarge + 20,
  },
});
