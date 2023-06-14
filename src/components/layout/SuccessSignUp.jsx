import React from "react";
import { Button } from "../ui";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero from "~/assets/images/hero-success-signup.png";

export const SuccessSignUp = () => {
  const navigation = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0.8, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex h-screen w-full flex-col items-center bg-white"
    >
      <img
        src={Hero}
        alt="hero"
        loading="lazy"
        width={200}
        height={290}
        className="mt-28"
      />
      <h2 className="mt-8 text-xl font-normal">Yeay! Completed</h2>
      <p className="mt-2 w-52 text-center text-sm font-light leading-5 text-brand-secondary">
        Now you are able to order some foods as a self-reward
      </p>
      <Button
        type="button"
        className="mt-8 w-52"
        handleClick={() => navigation("/")}
      >
        Find Foods
      </Button>
    </motion.div>
  );
};
