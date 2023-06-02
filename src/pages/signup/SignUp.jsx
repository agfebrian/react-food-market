import React from "react";
import { useNavigate } from "react-router-dom";
import { Page, Container } from "../../components/layout";
import {
  Navigation,
  Button,
  Input,
  Avatar,
  BorderAvatar,
} from "../../components/ui";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSignup } from "../../slices/signupSlice";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const {
    values,
    handleChange,
    errors,
    touched,
    setFieldTouched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
      password: Yup.string().min(8).required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      dispatch(
        setSignup({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      navigate("/register/address");
      setLoading(false);
    },
  });

  return (
    <Page>
      <Container>
        <div className="min-h-screen">
          <Navigation
            isBack={true}
            title="Sign Up"
            description="Register and eat"
            handleBack={() => navigate("/login")}
          />
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col gap-4 bg-white px-6 py-7"
          >
            <BorderAvatar rounded="circle" className="mx-auto">
              <Avatar rounded="circle" />
            </BorderAvatar>
            <div>
              <Input
                label="Full Name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onFocus={() => setFieldTouched("name", true)}
                placeholder="Type your full name"
                className={touched.name && errors.name ? "border-error" : ""}
              />
              {touched.name && errors.name && (
                <p className="mt-1 text-sm text-error">{errors.name}</p>
              )}
            </div>
            <div>
              <Input
                label="Email Address"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onFocus={() => setFieldTouched("email", true)}
                autoComplete="off"
                placeholder="Type your email address"
                className={touched.email && errors.email ? "border-error" : ""}
              />
              {touched.email && errors.email && (
                <p className="mt-1 text-sm text-error">{errors.email}</p>
              )}
            </div>
            <div>
              <Input
                label="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onFocus={() => setFieldTouched("password", true)}
                autoComplete="new-password"
                placeholder="Type your password"
                className={
                  touched.password && errors.password ? "border-error" : ""
                }
              />
              {touched.password && errors.password && (
                <p className="mt-1 text-sm text-error">{errors.password}</p>
              )}
            </div>
            <Button
              type="submit"
              color="primary"
              className="mt-2"
              disabled={loading}
              loading={loading}
            >
              Continue
            </Button>
          </form>
        </div>
      </Container>
    </Page>
  );
};
