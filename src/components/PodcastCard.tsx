import { PodcastData } from "@/constant";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

type PodcastCardProps = {
  podcast: PodcastData;
};

export function PodcastCard(props: PodcastCardProps) {
  const { podcast } = props;

  return (
    <Card className="shadow-none border-none cursor-pointer">
      <CardHeader>
        <Image
          src={podcast.imgURL}
          className="aspect-square h-fit w-full rounded-xl  2xl:size-[200px]"
          width={174}
          height={174}
          alt={podcast.title}
        />
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle className="text-16 truncate  font-bold text-white-1">
          {podcast.title}
        </CardTitle>
        <CardDescription className="text-12 truncate text-white-4 capitalize">
          {podcast.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
