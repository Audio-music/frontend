"use client";

import { instance } from "@/app/services/axios";
import React, { ReactNode, createContext, useState } from "react";

interface iPlayerProviderValues {
  playRecording(): void;
  pauseRecording(): void;
  updateRecordingSelected(recording: string): void;
  recordingPlaying: boolean;
}
interface iPlayerProviderProps {
  children: ReactNode;
}
export interface iPlayer {
  id: number;
  audio: string;
  date: string;
  title: string;
}

export const PlayerContext = createContext<iPlayerProviderValues>(
  {} as iPlayerProviderValues
);

export const PlayerProvider = ({ children }: iPlayerProviderProps) => {
  const [recordingPlaying, setRecordingPlaying] = useState<boolean>(false);
  const [recordingSelected, setRecordingSelected] =
    useState<HTMLAudioElement | null>(null);

  const playRecording = () => {
    recordingSelected?.play();
    setRecordingPlaying(true);
  };

  const pauseRecording = () => {
    recordingSelected?.pause();
    setRecordingPlaying(false);
  };

  const updateRecordingSelected = (recording: string) => {
    recordingSelected?.pause();
    setRecordingPlaying(true);
    setRecordingSelected(new Audio(recording));
  };

  return (
    <PlayerContext.Provider
      value={{
        playRecording,
        pauseRecording,
        updateRecordingSelected,
        recordingPlaying,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
