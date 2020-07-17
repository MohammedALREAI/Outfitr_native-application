import * as react from "react";

import { createStackNavigator } from "@react-navigation/stack";
import OnBound from "../Screen/OnBound";
import Wellocme from "../Screen/index.secreen";
import { NavigationContainer } from "@react-navigation/native";
i;

const StackAuthentications = createStackNavigator();
const AuthenticationsNavigation = () => {
  return (
    <StackAuthentications.Navigator headerMode="none">
      <StackAuthentications.Screen name="OnBound" component={OnBound} />
      <StackAuthentications.Screen name="Wellocme" component={Wellocme} />
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
