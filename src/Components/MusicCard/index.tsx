"use client";

import { useContext } from "react";
import { Player } from "../Player";
import { iRecording } from "@/Contexts/RecordingContext";
import { PlayerContext } from "@/Contexts/PlayerContext";
import { ProgressAudio } from "../Progress";

interface iMusicCard {
  recordings: iRecording[];
}

export const MusicCard = ({ recordings }: iMusicCard) => {
  const { updateRecordingSelected } = useContext(PlayerContext);

  return (
    <ul className=" grid grid-flow-col gap-8 pb-4 md:gap-10 lg:gap-14  overflow-x-auto md:overflow-hidden w-full md:w-auto justify-items-center md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 ">
      {recordings.map((recording: iRecording) => (
        <li
          key={recording.id}
          className="relative min-w-[260px] min-h-[280px] flex flex-col items-center justify-between gap-2 mb-2 rounded-radius-1 bg-random-3 p-4 z-40 md:w-[260px] h-[280px] dark:bg-gray-4"
        >
          <ProgressAudio recording={recording} />
          <div className="flex justify-center items-center h-[200px] z-20">
            <Player
              recording={recording}
              handlePlay={() => updateRecordingSelected(recording.audio)}
            />
          </div>
          <div className="w-full z-20 h-[90px]">
            <h4 className=" text-center text-gray-9 font-600 text-heading-4 mx-auto my-0">
              {recording.title}
            </h4>
          </div>
        </li>
      ))}
    </ul>
  );
};
