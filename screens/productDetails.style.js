import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999,
    },
    image: { aspectRatio: 1, resizeMode: "cover" },
    details: {
        marginTop: -SIZES.small,
        backgroundColor: COLORS.lightWhite,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
        paddingHorizontal: 10,
    },
    titleRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 10,
        top: 5,

    },
    cartRow: {

        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",

    },
    cartBtn: {
        width: SIZES.width * 0.7,
        backgroundColor: COLORS.black,
        padding: SIZES.small / 2,
        borderRadius: SIZES.large,
        marginLeft: 12,
    },

    cartTitle: {
        marginLeft: SIZES.small,
        fontFamily: "bold",
        fontWeight: "800",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite
    },
    ratingRow: {

        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 90,
        top: 20,

    },
    rating: {

        width: '100%',
        // top: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    ratingText: { color: COLORS.gray, fontFamily: "medium", paddingHorizontal: SIZES.xSmall },

    title: {
        fontFamily: "bold",
        fontWeight: "800",
        fontSize: SIZES.large,
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large,
        paddingHorizontal: 6,
        marginRight: 10,
    },
    price: {
        fontFamily: "semiBold",
        fontWeight: "600",
        fontSize: SIZES.large,
    },
    descriptionWrapper: {
        marginTop: SIZES.large * 2,
        //  marginHorizontal: SIZES.large

    },
    description: {
        fontFamily: "medium",
        fontSize: SIZES.large - 2
    },
    descText: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        textAlign: "justify",
        marginBottom: SIZES.small
    },
    location: {
        flexDirection: 'row', justifyContent: "space-between", alignItems: "center", backgroundColor: COLORS.secondary, padding: 5,
        borderRadius: SIZES.large
    },
    addCart: {
        width: 37,
        height: 37, borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: COLORS.black,
        alignItems: "center",
        justifyContent: 'center'
    }
});
export default styles;
