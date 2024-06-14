import Image from "next/image";
import React, { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;

  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image
          src="/images/bg-img.png"
          alt="background"
          fill
          className="size-full"
        />
      </div>
      <div className="flex-center glassmorphism-auth h-screen w-full">
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
