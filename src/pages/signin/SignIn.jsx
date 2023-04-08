import React from "react";
import { Page, Container } from "../../components/layout";
import { Input, Button, Navigation } from "../../components/ui";

export const SignIn = () => {
  return (
    <Page>
      <Container>
        <div className="max-h-screen overflow-hidden">
          <Navigation title="Sign In" description="Find your best ever meal" />
          <form
            autoComplete="off"
            className="mt-5 flex min-h-screen flex-col gap-4 bg-white px-6 py-7"
          >
            <Input
              label="Email Address"
              type="text"
              placeholder="Type your email address"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Type your password"
            />
            <Button type="submit" color="primary">
              Sign In
            </Button>
            <Button type="button" color="secondary">
              Create New Account
            </Button>
          </form>
        </div>
      </Container>
    </Page>
  );
};
