import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page, Container } from "~/components/layout";
import { Input, Button, Navigation } from "~/components/ui";
import { setAlert } from "~/slices/alertSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import http from "~/app/http";
import { setProfile } from "~/slices/profileSlice";
import { setToken } from "~/utils/storage";

export const SignIn = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    values,
    handleChange,
    errors,
    touched,
    setFieldTouched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
      password: Yup.string().min(8).required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      try {
        const {
          status,
          data: { data },
        } = await http.post("/auth/login", values);

        if (status === 200) {
          dispatch(
            setAlert({
              show: true,
              message: "Success signup",
              type: "success",
            })
          );
          dispatch(
            setProfile({
              name: data.name,
              email: data.email,
              city: data.city,
              address: data.address,
              phoneNumber: data.phoneNumber,
              houseNumber: data.houseNumber,
            })
          );
          setToken(data.token);
          navigate("/");
        } else {
          dispatch(
            setAlert({
              show: true,
              message: "Something went wrong",
              type: "error",
            })
          );
        }
      } catch (error) {
        const { message } = error;
        dispatch(
          setAlert({
            show: true,
            message: message,
            type: "error",
          })
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Page>
      <Container>
        <div className="max-h-screen overflow-hidden">
          <Navigation title="Sign In" description="Find your best ever meal" />
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="mt-5 flex min-h-screen flex-col gap-4 bg-white px-6 py-7"
          >
            <div>
              <Input
                label="Email Address"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onFocus={() => setFieldTouched("email", true)}
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
                placeholder="Type your password"
                className={
                  touched.password && errors.password ? "border-error" : ""
                }
              />
              <p className="mt-1 text-sm text-error">{errors.password}</p>
            </div>
            <Button
              type="submit"
              color="primary"
              disabled={loading}
              loading={loading}
            >
              Sign In
            </Button>
            <Button
              type="button"
              color="secondary"
              handleClick={() => navigate("/register")}
            >
              Create New Account
            </Button>
          </form>
        </div>
      </Container>
    </Page>
  );
};
