import { GeneratePodcastProps } from "@/types";
import React from "react";

export function GeneratePodcast(props: GeneratePodcastProps) {
  const {
    audio,
    setAudio,
    setAudioDuration,
    setAudioStorageId,
    setVoicePrompt,
    voicePrompt,
    voiceType,
  } = props;

  return <div>GeneratePodcast</div>;
}
