import { fetchEpisode } from "@/lib/apis";
import React from "react";

type Props = { params: { id: string } };

const page = async ({ params }: Props) => {
  console.log("params: " + params.id);
  const episode: Episode = await fetchEpisode(params.id);
  return (
    <main className="p-2 flex flex-col justify-center justify-items-center w-96">
      <div className="text-center">
        <h2>{episode.episode}</h2>
        <h1>{episode.name}</h1>
        <div className="detail-item">
          Air Date : <strong>{episode.air_date}</strong>
        </div>
      </div>
      <div className="heading">
        <h2>Seen Characters</h2>
      </div>
      {/* <Characters data={characters} /> */}
    </main>
  );
};

export default page;
