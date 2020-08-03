import { useTheme } from "../../components/index";
import { StyleSheet } from "react-native";

const theme = useTheme();
export const OnBoardingStyle = {
  container: {
    flex: 1,
  },
  slider: {
    height: theme.borderRadii.xl,
    backgroundColor: "cyan",
    borderBottomEndRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContext: {
    flex: 1,
    backgroundColor: "white",
    borderBottomEndRadius: theme.borderRadii.xl,
  },
  pagination: {
    height: 45,
    ...StyleSheet.absoluteFillObject,

    backgroundColor: "blue",
    flexDirection: "row",
    width,
    justifyContent: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomEndRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
};
