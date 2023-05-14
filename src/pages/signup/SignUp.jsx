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

export const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nama dibutuhkan"),
      email: Yup.string()
        .email("Format email tidak sesuai")
        .required("Email diperlukan"),
      password: Yup.string().required("Password diperlukan"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      console.log(values);
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
                placeholder="Type your full name"
                className={errors.name ? "border-error" : ""}
              />
              {errors.name && (
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
                autoComplete="off"
                placeholder="Type your email address"
                className={errors.email ? "border-error" : ""}
              />
              {errors.email && (
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
                autoComplete="new-password"
                placeholder="Type your password"
                className={errors.password ? "border-error" : ""}
              />
              {errors.password && (
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
