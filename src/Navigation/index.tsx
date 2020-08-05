import * as react from "react";

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import {
  OnBound,
  Wellocme,
  Login,
  SingUp,
  ForgetPassword,
  changedPassword,
} from "../Screen/index";

const StackAuthentications = createStackNavigator<Route>();
const AuthenticationsNavigation = () => {
  return (
    <StackAuthentications.Navigator headerMode="none">
      <StackAuthentications.Screen name="OnBound" component={OnBound} />
      <StackAuthentications.Screen name="welcome" component={Wellocme} />
      <StackAuthentications.Screen name="login" component={Login} />
      <StackAuthentications.Screen name="SingUp" component={SingUp} />
            <StackAuthentications.Screen name="changedPassword" component={changedPassword} />
      <StackAuthentications.Screen
        name="ForgetPassword"
        component={ForgetPassword}
      />
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
