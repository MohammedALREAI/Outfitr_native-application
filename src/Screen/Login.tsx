import * as React from "react";
import {
  Box,
  Container,
  Button,
  Text,
  MyTextInput as TextInput,
  Checkbox,
} from "../components/index";

import { useFormik } from "formik";
import Footer from "../components/Form/Footer";

import { loginSchemaValidation } from "../components/Form/validation";
import { StackNavigationProp, Route } from "../components/Routes";
const Login = ({ navigation }: StackNavigationProp<Route, "login">) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: { email: "", password: "", remember: true },
    validationSchema: loginSchemaValidation,
    onSubmit: (values) => console.log({ ...values }),
  });
  const password = React.useRef<typeof TextInput>(null);
  const footer = (
    <Footer
      title=" Don’t have an Account ?"
      action="Sign Up here ?"
      onPress={() => navigation.navigate("SingUp")}
    />
  );

  return (
    <Container pattern={0} footer={footer} height={Wheight}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" color="text">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" color="text" marginBottom="m">
          Use your credentials below and login to your account{" "}
        </Text>
        return (
        <Box>
          <Box marginBottom="m">
            <TextInput
              placeholder="enter your email"
              type="email-address"
              icon="email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              defaultValue={values.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => password.current?.foucs()}
            />
            <TextInput
              ref={password}
              placeholder="enter your password"
              type="visible-password"
              icon="password"
              autoCompleteType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              defaultValue={values.password}
              returnKeyLabel="lets start"
              returnKeyType="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>

          <Box flexDirection="row" justifyContent="space-between">
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
            <Button
              variant="transparent"
              onPress={() => navigation.navigate("ForgetPassword")}
            >
              <Text variant="" color="primary">
                Forget password ?
              </Text>
            </Button>
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label=" login in your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
