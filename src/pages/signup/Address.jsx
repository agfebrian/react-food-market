import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Page, Container } from "../../components/layout";
import { Navigation, Button, Input, Select } from "../../components/ui";
import { useFormik } from "formik";
import * as Yup from "yup";
import http from "../../app/http";
import { useNavigate } from "react-router-dom";
import { setAlert } from "../../slices/alertSlice";

export const Address = () => {
  const signup = useSelector((state) => state.signup);
  const [loading, setLoading] = useState();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const {
    values,
    handleChange,
    errors,
    touched,
    setFieldTouched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      phoneNumber: "",
      address: "",
      houseNumber: "",
      city: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .min(11, "Phone minimal 11 number")
        .max(13, "Phone maximal 13 number")
        .required("Phone is required"),
      address: Yup.string().required("Address is required"),
      houseNumber: Yup.string().required("House number is required"),
      city: Yup.string().required("City is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      const payload = {
        ...signup,
        ...values,
        ...{ password_confirmation: signup.password },
      };
      http
        .post("/register", payload)
        .then((res) => {
          const {
            status,
            data: { data },
          } = res;
          console.log(data);
          if (status === 200) {
            dispatch(
              setAlert({
                show: true,
                message: "Success user register",
                type: "success",
              })
            );
          }
        })
        .catch((err) => {
          const {
            response: {
              data: { errors },
            },
          } = err;
          dispatch(
            setAlert({
              show: true,
              message: Object.values(errors)[0][0],
              type: "error",
            })
          );
        })
        .finally(() => setLoading(false));
    },
  });

  return (
    <Page>
      <Container>
        <div className="max-h-screen overflow-hidden">
          <Navigation
            isBack={true}
            title="Address"
            description="Make sure it's valid"
            handleBack={() => navigation("/register")}
          />
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="mt-5 flex min-h-screen flex-col gap-4 bg-white px-6 py-7"
          >
            <div>
              <Input
                label="Phone No."
                type="number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onFocus={() => setFieldTouched("phoneNumber", true)}
                placeholder="Type your phone number"
                className={
                  touched.phoneNumber && errors.phoneNumber
                    ? "border-error"
                    : ""
                }
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <p className="mt-1 text-sm text-error">{errors.phoneNumber}</p>
              )}
            </div>
            <div>
              <Input
                label="Address"
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                onFocus={() => setFieldTouched("address", true)}
                placeholder="Type your address"
                className={
                  touched.address && errors.address ? "border-error" : ""
                }
              />
              {touched.address && errors.address && (
                <p className="mt-1 text-sm text-error">{errors.address}</p>
              )}
            </div>
            <div>
              <Input
                label="House No."
                type="number"
                name="houseNumber"
                value={values.houseNumber}
                onChange={handleChange}
                onFocus={() => setFieldTouched("houseNumber", true)}
                placeholder="Type your house number"
                className={
                  touched.houseNumber && errors.houseNumber
                    ? "border-error"
                    : ""
                }
              />
              {touched.houseNumber && errors.houseNumber && (
                <p className="mt-1 text-sm text-error">{errors.houseNumber}</p>
              )}
            </div>
            <div>
              <Select
                label="City"
                name="city"
                onChange={handleChange}
                onFocus={() => setFieldTouched("city", true)}
                className={touched.city && errors.city ? "border-error" : ""}
              >
                <option value="">Select your city</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
              </Select>
              {touched.city && errors.city && (
                <p className="mt-1 text-sm text-error">{errors.city}</p>
              )}
            </div>
            <Button
              type="submit"
              color="primary"
              className="mt-2"
              disabled={loading}
              loading={loading}
            >
              Sign Up Now
            </Button>
          </form>
        </div>
      </Container>
    </Page>
  );
};
