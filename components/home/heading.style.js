import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index"
const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        marginBottom: -SIZES.xSmall,
        marginHorizontal: 12
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        alignItems: "center",
        marginHorizontal: 10, marginTop: SIZES.small
    }, headerTitle: {
        fontFamily: "semiBold",
        fontSize: SIZES.xLarge - 2,



    }
});
export default styles;
