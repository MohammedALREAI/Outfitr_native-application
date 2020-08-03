import * as react from "react";

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { OnBound } from "../Screen/OnBound";
import { Route } from "../components/Routes/index";
import Wellocme from "../Screen/Wellocme";
import Login from "../Screen/Login";

const StackAuthentications = createStackNavigator<Route>();
const AuthenticationsNavigation = () => {
  return (
    <StackAuthentications.Navigator headerMode="none">
      <StackAuthentications.Screen name="OnBound" component={OnBound} />
      <StackAuthentications.Screen name="welcome" component={Wellocme} />
            <StackAuthentications.Screen name="login" component={Login} />
    </StackAuthentications.Navigator>
  );
};
function NavigationScreen() {
  return (
    <NavigationContainer>
      <AuthenticationsNavigation />
    </NavigationContainer>
  );
}
export default NavigationScreen;
