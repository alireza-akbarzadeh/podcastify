"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

type ConvexClerkProvider = {
  children: React.ReactNode;
};

export function ConvexClerkProvider(props: ConvexClerkProvider) {
  const { children } = props;

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
      appearance={{
        baseTheme: dark,
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/icons/auth-logo.svg",
          socialButtonsPlacement: "bottom",
        },
        variables: {
          colorBackground: "#15171c",
          colorPrimary: "#f50",
          colorText: "white",
          colorInputBackground: "#1b1f29",
          colorInputText: "white",
        },
      }}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
