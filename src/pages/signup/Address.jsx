import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Page, Container } from "../../components/layout";
import { Navigation, Button, Input, Select } from "../../components/ui";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Address = () => {
  const signup = useSelector((state) => state.signup);
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
      phone: "",
      address: "",
      houseNumber: "",
      city: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .min(11, "Phone minimal 11 number")
        .max(13, "Phone maximal 13 number")
        .required("Phone is required"),
      address: Yup.string().required("Address is required"),
      houseNumber: Yup.string().required("House number is required"),
      city: Yup.string().required("City is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
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
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onFocus={() => setFieldTouched("phone", true)}
                placeholder="Type your phone number"
                className={touched.phone && errors.phone ? "border-error" : ""}
              />
              {touched.phone && errors.phone && (
                <p className="mt-1 text-sm text-error">{errors.phone}</p>
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
