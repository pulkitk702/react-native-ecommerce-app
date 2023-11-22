import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "expo-font";
import * as SplashScreeen from "expo-splash-screen";
import { useCallback } from "react";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

import { Cart, NewRivals, ProductDetails, LoginPage, Orders, Favourites, SingUp, FavouritesList } from './screens/index'
import axios from "axios";
//import SingUp from "./screens/SingUp";

const Stack = createStackNavigator();
export default function App() {
    const [fontsLoaded] = useFonts({
        regular: require("./assets/fonts/Poppins-Regular.ttf"),
        bold: require("./assets/fonts/Poppins-Bold.ttf"),
        extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
        light: require("./assets/fonts/Poppins-Light.ttf"),
        medium: require("./assets/fonts/Poppins-Medium.ttf"),
        semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreeen.hideAsync();
        }
    }, [fontsLoaded]);
    if (!fontsLoaded) {
        return null;
    }


    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen
                    name="BottomTabNavigaton"
                    component={BottomTabNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProductDetails"
                    component={ProductDetails}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProductList"
                    component={NewRivals}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Orders"
                    component={Orders}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Favourites"
                    component={Favourites}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="FavouritesList"
                    component={FavouritesList}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SingUp"
                    component={SingUp}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

