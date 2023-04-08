import React from "react";
import { Page, Container } from "../../components/layout";
import {
  Navigation,
  Button,
  Input,
  Avatar,
  BorderAvatar,
} from "../../components/ui";

export const SignUp = () => {
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
            className="mt-5 flex flex-col gap-4 bg-white px-6 py-7"
          >
            <BorderAvatar size="28" rounded="circle" className="mx-auto">
              <Avatar size="24" rounded="circle" />
            </BorderAvatar>
            <Input
              label="Full Name"
              type="text"
              placeholder="Type your full name"
            />
            <Input
              label="Email Address"
              type="text"
              autoComplete="off"
              placeholder="Type your email address"
            />
            <Input
              label="Password"
              type="password"
              autoComplete="new-password"
              placeholder="Type your password"
            />
            <Button type="submit" color="primary" className="mt-2">
              Continue
            </Button>
          </form>
        </div>
      </Container>
    </Page>
  );
};
