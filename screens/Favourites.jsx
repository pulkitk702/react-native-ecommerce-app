import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FavouritesList } from "../screens/index";
import { SIZES } from "../constants";
const Favourites = () => {
  useEffect(() => {
    favouritesData();
  }, []);
  const [favData, setFavData] = useState([]);
  const favouritesData = async () => {
    try {
      const response = await axios.get("http://10.0.2.2:3000/api/favourites");
      setFavData(() => response.data.data);
    } catch (err) {
      console.log("Favourites Error", err);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        marginTop: SIZES.height / 14,
      }}
    >
      <FlatList
        style={{ backgroundColor: "white", flex: 1 }}
        data={favData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <FavouritesList item={item} />}
      />
    </View>
  );
};

export default Favourites;
