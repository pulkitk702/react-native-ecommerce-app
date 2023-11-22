import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";
import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        marginTop: 19,
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    cover: {
        height: "60%",
        width: "100%",
        resizeMode: "cover"
    },
    profileConatiner: {
        flex: 1,
        alignItems: "center"
    }, profile: {
        height: 155,
        width: 155,
        borderRadius: 999,
        borderColor: COLORS.primary,
        resizeMode: "cover",
        marginTop: windowHeight - 1100,
        borderWidth: 2
    },
    name: {
        fontFamily: "bold",
        color: COLORS.primary,
        marginVertical: 5,
    },
    loginBtn: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderWidth: 0.4,
        borderColor: COLORS.primary,
        borderRadius: SIZES.xxLarge
    }, menuText: {
        fontFamily: "regular",
        color: COLORS.gray,
        marginLeft: 5,
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 26
    },
    menuWrapper: {
        marginTop: SIZES.xLarge,
        width: SIZES.width - SIZES.large,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12,
    }, menuItem: (borderBottomWidth) => ({
        borderBottomWidth: borderBottomWidth,
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderColor: COLORS.gray

    }
    )
});
export default styles;
