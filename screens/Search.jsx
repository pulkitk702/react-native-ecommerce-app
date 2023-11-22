import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "./search.style";
import Feather from "react-native-vector-icons/Feather";
import { COLORS, SIZES } from "../constants/index";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SearchTitle } from "../components/index";
import axios from "axios";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResults] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:3000/api/products/search/${searchKey}`
      );
      setSearchResults(response.data);
    } catch (err) {
      console.log("Failed to get Products", err);
    }
  };
  return (
    <SafeAreaView style={{}}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchKey}
            placeholder="What Are You Looking For"
            onChangeText={setSearchKey}
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => {
              handleSearch();
            }}
          >
            <Feather
              name="search"
              size={SIZES.xLarge}
              color={COLORS.tertiary}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchResult.length == 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", marginRight: SIZES.medium }}
        >
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTitle item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
