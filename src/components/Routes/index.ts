import { StackNavigationProp } from "@react-navigation/stack";
import type { ParamListBase, RouteProp } from "@react-navigation/native";

export interface StackNavigationProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}
export type Route = {
  OnBound: undefined;
  welcome: undefined;
  login: undefined;
  SingUp: undefined;
  ForgetPassword: undefined;
  changedPassword: undefined;
};
