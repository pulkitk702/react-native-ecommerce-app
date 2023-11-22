import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "./productDetails.style";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants";
import axios from "axios";
const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  console.log(item.title);
  const [count, setCount] = useState(1);
  const Increment = () => {
    setCount(() => count + 1);
  };
  const Decrement = () => {
    if (count >= 1) {
      setCount(() => count - 1);
    }
    setCount(() => 1);
  };
  const favouritesData = async () => {
    //navigation.navigate("Favourites", { item });
    try {
      await axios.post("http://10.0.2.2:3000/api/favourites", {
        title: item.title,
        supplier: item.supplier,
        price: item.price,
        imageUrl: item.imageUrl,
        description: item.description,
        product_location: item.product_location,
      });
    } catch (err) {
      console.log("Favourites Error", err);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            favouritesData();
            // navigation.goBack();
          }}
        >
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => {
              return (
                <Ionicons key={index} name="star" size={24} color="gold" />
              );
            })}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => {
                Increment();
              }}
            >
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{`  ${count}  `}</Text>
            <TouchableOpacity
              onPress={() => {
                Decrement();
              }}
            >
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>{item.description}</Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text> {item.product_location}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text> Free delivery</Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
