import React from "react";
import { Page, Container } from "../../components/layout";
import { Navigation, Button, Input, Select } from "../../components/ui";

export const Address = () => {
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
            className="mt-5 flex min-h-screen flex-col gap-4 bg-white px-6 py-7"
          >
            <Input
              label="Phone No."
              type="number"
              placeholder="Type your phone number"
            />
            <Input
              label="Address"
              type="text"
              placeholder="Type your address"
            />
            <Input
              label="House No."
              type="number"
              placeholder="Type your house number"
            />
            <Select label="City">
              <option value="">Select your city</option>
            </Select>
            <Button type="submit" color="primary" className="mt-2">
              Sign Up Now
            </Button>
          </form>
        </div>
      </Container>
    </Page>
  );
};
