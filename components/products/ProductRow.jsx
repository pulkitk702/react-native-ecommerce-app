import { FlatList, View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { ProductCardView } from "../index";
import styles from "./productRow.style";
import useFetch from "../../hook/useFetch";
const ProductRow = () => {
  const { data, isLoading, error } = useFetch();

  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something Went Wrong</Text>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
          style={{ marginBottom: 100 }}
        />
      )}
    </View>
  );
};

export default ProductRow;
