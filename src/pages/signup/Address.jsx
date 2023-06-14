import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Page, Container, SuccessSignUp } from "~/components/layout";
import { Navigation, Button, Input, Select } from "~/components/ui";
import { useFormik } from "formik";
import * as Yup from "yup";
import http from "~/app/http";
import { useNavigate } from "react-router-dom";
import { setAlert } from "~/slices/alertSlice";
import { setToken } from "~/utils/storage";
import { setProfile } from "~/slices/profileSlice";

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
      phone_number: "",
      address: "",
      house_number: "",
      city: "",
    },
    validationSchema: Yup.object({
      phone_number: Yup.string()
        .min(11, "Phone minimal 11 number")
        .max(13, "Phone maximal 13 number")
        .required("Phone is required"),
      address: Yup.string().required("Address is required"),
      house_number: Yup.string().required("House number is required"),
      city: Yup.string().required("City is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      const payload = {
        ...signup,
        ...values,
        ...{ phone_number: values.phone_number.toString() },
        ...{ house_number: values.house_number.toString() },
      };
      http
        .post("/auth/register", payload)
        .then((res) => {
          const {
            status,
            data: { data },
          } = res;

          if (status === 200) {
            dispatch(
              setAlert({
                show: true,
                message: "Success user register",
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
            setTimeout(() => setSuccessSignup(true), 1000);
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
  const [successSignup, setSuccessSignup] = useState(false);

  return (
    <Page>
      <Container>
        {successSignup ? (
          <SuccessSignUp />
        ) : (
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
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                  onFocus={() => setFieldTouched("phone_number", true)}
                  placeholder="Type your phone number"
                  className={
                    touched.phone_number && errors.phone_number
                      ? "border-error"
                      : ""
                  }
                />
                {touched.phone_number && errors.phone_number && (
                  <p className="mt-1 text-sm text-error">
                    {errors.phone_number}
                  </p>
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
                  name="house_number"
                  value={values.house_number}
                  onChange={handleChange}
                  onFocus={() => setFieldTouched("house_number", true)}
                  placeholder="Type your house number"
                  className={
                    touched.house_number && errors.house_number
                      ? "border-error"
                      : ""
                  }
                />
                {touched.house_number && errors.house_number && (
                  <p className="mt-1 text-sm text-error">
                    {errors.house_number}
                  </p>
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
        )}
      </Container>
    </Page>
  );
};
