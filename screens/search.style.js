import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";
const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginTop: SIZES.xxLarge + 5,
        marginBottom: SIZES.large,
        height: 50,
        width: "95%",
        alignSelf: "center"
    },
    searchIcon: {
        marginHorizontal: 10,
        //backgroundColor: COLORS.secondary,
        color: COLORS.gray,
        marginTop: SIZES.small,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: "95%",
        borderRadius: SIZES.medium,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.secondary,
    },
    searchImage: {
        resizeMode: 'contain',
        width: SIZES.width - 100,
        height: SIZES.height - 300,
        opacity: 0.9
    }
});
export default styles;
