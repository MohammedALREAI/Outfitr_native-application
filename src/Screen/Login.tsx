import * as React from "react";
import {
  Box,
  Container,
  Button,
  Text,
  MyTextInput as TextInput,
  Checkbox,
} from "../components/index";

import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../components/Form/Footer";

const loginSchemaValidation = Yup.object.shape({
  email: Yup.string()
    .email("Invalid email")
    .max(22, "it is long matche ")
    .required("it should be provide email"),
  password: Yup.string()
    .min(6, "it should be more than 6 Character")
    .max(22, "it is long matche ")
    .required("this password should be provide"),
});
const Login = () => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,} = useFormik(
{
initialValues:{email: "", password: "", remember: true },
validationSchema :loginSchemaValidation,
onSubmit: (values) => console.log({ ...values })
  });
  const password= React.useRef< typeof TextInput>(null)
     const footer = <Footer title=" Don’t have an Account ?"
      action="Sign Up here ?" onPress={()=>true}/>

  return (
       <Container footer={footer}>
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
               onSubmitEditing={()=>password.current?.foucs()}

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
                                onSubmitEditing={()=>handleSubmit()}

              />
            </Box>

            <Box flexDirection="row" justifyContent="space-between">
              <Checkbox
                label="Remember me"
                checked={values.remember}
                onChange={() => setFieldValue(!values.remember)}
              />
              <Button variant="transparent" onPress={handleSubmit}>
                <Text variant="" color="primary">
                  Forget password.max(22,"it is long matche ").
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
          ); }}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
