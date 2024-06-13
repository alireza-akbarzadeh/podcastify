import React from "react";

type HeadingProps = {
  title: string;
};

export function Heading(props: HeadingProps) {
  const { title } = props;

  return <h1 className="text-20  text-white-1 font-bold ">{title}</h1>;
}
