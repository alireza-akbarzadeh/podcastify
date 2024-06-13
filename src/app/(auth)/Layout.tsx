import React, { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;

  return <main>{children}</main>;
}
