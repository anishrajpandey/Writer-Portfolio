"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="4px"
        color="#f26213"
        options={{ showSpinner: true }}
        showOnShallow
      />
    </>
  );
};
