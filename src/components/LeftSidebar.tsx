"use client";
import { SidebarLinks } from "@/constant/sideabr";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type LeftSidebarProps = {};

export function LeftSidebar(props: LeftSidebarProps) {
  const {} = props;
  const pathname = usePathname();
  const route = useRouter();
  return (
    <aside className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="flex cursor-pointer items-center gap-3 pb-10">
          <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white-1 max-lg:hidden">
            Podcastify
          </h1>
        </Link>
        {SidebarLinks.map(({ imgUrl, label, route }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);
          return (
            <Link
              key={route}
              href={route}
              className={cn(
                "flex cursor-pointer items-center gap-3 py-4 justify-center max-lg:px-4 lg:justify-start",
                {
                  "bg-nav-focus  border-r-[5px] border-orange-1": isActive,
                }
              )}
            >
              <Image src={imgUrl} alt="logo" width={23} height={27} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
