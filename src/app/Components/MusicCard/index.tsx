"use client";

import { musics } from "../../constants/musics";
import { Player } from "../Player";

export const MusicCard = () => {
  return (
    <ul className="flex gap-8 overflow-x-auto w-full justify-start md:justify-center items-center px-[5%] pb-6 md:flex-wrap">
      {musics.map((music) => (
        <li
          key={music.id}
          className="relative min-w-[260px] min-h-[280px] flex flex-col items-center justify-end gap-2 rounded-radius-2 bg-random-2 p-4"
        >
          <Player music={music} />
          <h3 className=" text-gray-5 font-600 text-heading-3">
            {music.title}
          </h3>
        </li>
      ))}
    </ul>
  );
};
