"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { InputController } from "./forms/InputController";
import { Form } from "@/components/ui/form";
import { Button } from "./ui/button";

import { SelectController } from "./forms/SelectController";
import { useState } from "react";
import { GeneratePodcast } from "./GeneratePodcast";
import { GenerateThumbnail } from "./GenerateThumbnail";
import { Id } from "../../convex/_generated/dataModel";
import { VoiceType } from "@/types";

type PodcastFormProps = {};

const PodcastSchema = z.object({
  podcastTitle: z.string().min(2),
  podcastDescription: z.string().min(2),
});

type PodcastSchemaType = z.infer<typeof PodcastSchema>;

export function PodcastForm(props: PodcastFormProps) {
  const {} = props;
  const [voiceType, setVoiceType] = useState<VoiceType>();
  const [imagePrompt, setImagePrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [audioStorageId, setAudioStorageId] = useState<Id<"_storage"> | null>(
    null
  );
  const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(
    null
  );
  const [audioUrl, setAudioUrl] = useState("");
  const [audioDuration, setAudioDuration] = useState(0);
  const [voicePrompt, setVoicePrompt] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formProviders = useForm<PodcastSchemaType>({
    resolver: zodResolver(PodcastSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: "",
    },
  });

  const handleCreatePodcast = (valuse: PodcastSchemaType) => {};
  const voiceCategories = ["alloy", "shimmer", "nova", "echo", "fable", "onyx"];

  return (
    <section className="mt-10 flex flex-col">
      <Form {...formProviders}>
        <form
          className="mt-12 flex w-full flex-col"
          onSubmit={formProviders.handleSubmit(handleCreatePodcast)}
        >
          <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
            <InputController
              control={formProviders.control}
              name="podcastTitle"
              placeholder="Enter a title"
              label="Podcast Title"
            />
            <SelectController
              onChange={setVoiceType}
              label="Select Ai Voice"
              placeholder="Select Ai Voice"
              items={voiceCategories.map((voice) => ({
                title: voice,
                value: voice,
              }))}
            />
            {voiceType && (
              <audio src={`/${voiceType}.mp3`} autoPlay className="hidden" />
            )}
            <InputController
              control={formProviders.control}
              components="textArea"
              name="podcastDescription"
              placeholder="write a short podcast description"
              label="Podcast Description"
            />
          </div>
          <div className="flex flex-col pt-10">
            <GeneratePodcast
              setAudioStorageId={setAudioStorageId}
              setAudio={setAudioUrl}
              voiceType={voiceType}
              audio={audioUrl}
              voicePrompt={voicePrompt}
              setVoicePrompt={setVoicePrompt}
              setAudioDuration={setAudioDuration}
            />
            <GenerateThumbnail />
            <div className="mt-10 w-full">
              <Button
                loading={formProviders.formState.isSubmitting}
                type="submit"
                className="text-[16px] w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-100 hover:bg-black-1"
              >
                {formProviders.formState.isSubmitting
                  ? "submeting..."
                  : "Submitting & Publish Podcast"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
}
