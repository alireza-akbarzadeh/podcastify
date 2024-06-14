import { PodcastForm } from "@/components/PodcastForm";
import { Heading } from "@/components/heading";
import React from "react";

function CreatePodcast() {
  return (
    <div>
      <Heading title="Create Podcast" />
      <PodcastForm />
    </div>
  );
}

export default CreatePodcast;
