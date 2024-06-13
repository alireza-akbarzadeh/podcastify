import React from "react";

type SidebarLinksProps = {
  route: string;
  label: string;
  imgUrl: string;
};

export const SidebarLinks: SidebarLinksProps[] = [
  {
    imgUrl: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgUrl: "/icons/discover.svg",
    route: "/discover",
    label: "Discover",
  },
  {
    imgUrl: "/icons/microphone.svg",
    route: "/create-podcast",
    label: "Create Podcast",
  },
];
