"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = { index: number; episode: Episode };

const EpisodeRow = ({ index, episode }: Props) => {
  const router = useRouter();
  return (
    <tr
      key={index}
      className="cursor-pointer"
      onClick={() => {
        router.push("/episode/" + episode.id);
      }}
    >
      <td>{episode.name}</td>
      <td>{episode.air_date}</td>
      <td>{episode.episode}</td>
    </tr>
  );
};

export default EpisodeRow;
