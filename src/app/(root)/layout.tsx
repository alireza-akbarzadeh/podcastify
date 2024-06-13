import { LeftSidebar } from "@/components/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import Image from "next/image";
import React from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
          <div className="mx-auto flex w-full flex-col max-w-5xl  max-sm:px-4">
            <div className="flex h-16 items-center justify-center md:hidden">
              <Image
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="menu screen"
              />
              mobileNav
            </div>
            <div>Toaster</div>
            {children}
          </div>
        </section>
        <RightSidebar />
      </main>
    </div>
  );
}

export default RootLayout;
