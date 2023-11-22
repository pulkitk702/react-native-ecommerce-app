import {
  View,
  Text,
  SafeAreaView,
  Image,
  Touchable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./profile.style";
import { StatusBar } from "expo-status-bar";
import { COLORS, SIZES } from "../constants/index";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  useEffect(() => {
    // checkExistingUser();
  }, []);
  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;
    try {
      const currentUser = await AsyncStorage.getItem(userId);
      if (currentUser != null) {
        const parseData = JSON.parse(currentUser);
        setUserData(parseData);
        setUserLogin(true);
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log("Error retrieving the data", error);
    }
  };
  const userLogout = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;
    try {
      await AsyncStorage.multiRemove([userId, "id"]);
      navigation.replace("BottomTabNavigation");
    } catch (err) {}
    console.log("Error Logging out the User :", error);
  };
  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "Continue",
        onPress: () => userLogout(),
      },
    ]);
  };
  const clearCache = () => {
    Alert.alert(
      "ClearCache",
      "Are you sure you want to delete all save data on your device ",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Clear Cache"),
        },
        {
          text: "Continue",
          onPress: () => console.log("Delete Account Pressed"),
        },
      ]
    );
  };
  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your Account",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Continue",
          onPress: () => console.log("Delete Account Pressed"),
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={{ width: "100%" }}>
          <Image
            source={require("../assets/images/space.jpg")}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileConatiner}>
          <Image
            source={require("../assets/images/profile.jpeg")}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userData ? userData.name : "Please login into your account"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>L O G I N.com</Text>
            </View>
          )}
          {userLogin === true ? (
            <View></View>
          ) : (
            <ScrollView
              style={{ marginBottom: 100 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.menuWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Favourites");
                  }}
                >
                  <View style={styles.menuItem(0.3)}>
                    <MaterialCommunityIcons
                      name="heart-outline"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuText}>Favorites</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate("Orders");
                  }}
                >
                  <View style={styles.menuItem(0.3)}>
                    <MaterialCommunityIcons
                      name="truck-delivery-outline"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuText}>Orders</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    //  navigation.navigate("Cart");
                  }}
                >
                  <View style={styles.menuItem(0.3)}>
                    <SimpleLineIcons
                      name="bag"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuText}>Cart</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    clearCache();
                  }}
                >
                  <View style={styles.menuItem(0.3)}>
                    <MaterialCommunityIcons
                      name="cached"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuText}>Clear cache</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deleteAccount();
                  }}
                >
                  <View style={styles.menuItem(0.3)}>
                    <AntDesign
                      name="deleteuser"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuText}>Delete Account</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    logout();
                  }}
                >
                  <View style={styles.menuItem(0.3)}>
                    <AntDesign name="logout" size={24} color={COLORS.primary} />
                    <Text style={styles.menuText}>Logout</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
